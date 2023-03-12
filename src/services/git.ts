
export async function getFollowers(username: string, value: number = 1) {
    const response = await fetch(`https://api.github.com/users/${username}/followers`);
    const data = await response.json();
    if (!data.length) return [];
    return data.map((follower: any) => ({ name: follower.login, value, link: `https://github.com/${follower.login}`, }));
}
export async function fetchFollowers(username: string) {
    const followers = await getFollowers(username, 15);
    let childrenFollowers: any[] = [];

    const formattedFollowers = followers.map((follower: any, i: number) => ({
        ...follower,
        linkWith: childrenFollowers[i]?.map((follower: any) => follower.name) || []
    }));

    const tempRootData = {
        name: 'Root',
        value: 0,
        children: [
            {
                name: username,
                value: 25,
                link: `https://github.com/${username}`,
                linkWith: formattedFollowers.map((follower: any) => follower.name)
            },
            ...formattedFollowers
        ]
    };

    tempRootData.children = removeDuplicatesByName(tempRootData.children);
    return tempRootData;
}

const removeDuplicatesByName = (arr: any) => {
    const unique = arr
        .map((e: any) => e.name)
        .map((e: any, i: any, final: any) => final.indexOf(e) === i && i)
        .filter((e: any) => arr[e])
        .map((e: any) => arr[e]);
    return unique;
};