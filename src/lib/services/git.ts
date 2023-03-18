import type { IChartData, IRootData } from '../types/chart-types';
import { removeDuplicatesByName } from '../utils/sorting-utils';

export async function getFollowers(username: string, value: number = 1) {
    const response = await fetch(`https://api.github.com/users/${username}/followers`);
    const data = await response.json();
    if (!data.length) return [];
    return data.map((follower: any) => {

        const childUser: IChartData = {
            name: follower.login,
            value,
            link: `https://github.com/${follower.login}`,
            avatar_url: follower.avatar_url,
        }
        return childUser;

    });
}

const getAvatar = async (username: string) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    if (!data.avatar_url) return '';
    return data.avatar_url;
}

const createUserData = async (username: string, value: number = 1) => {
    const user: IChartData = {
        name: username,
        value,
        link: `https://github.com/${username}`,
    };
    return user;
}

const addLinks = (user: IChartData, followers: IChartData[]) => {
    user.linkWith = followers.map((follower: IChartData) => follower.name);
    return user;
}


export async function fetchFollowers(username: string, depth = 1) {
    let user = await createUserData(username, 30);
    user.avatar_url = await getAvatar(username);

    const followers = await getFollowers(username, 15);
    user = addLinks(user, followers);

    const followerFollowers = depth >= 2 ? await Promise.all(followers.map(async (follower: IChartData) => {
        const tempFollowerFollowers = await getFollowers(follower.name, 1);
        return addLinks(follower, tempFollowerFollowers);
    })) : [];


    const tempRootData : IRootData = {
        name: 'Root',
        value: 0,
        children: [
            user,
            ...followers,
            ...followerFollowers
        ]
    };

    tempRootData.children = removeDuplicatesByName(tempRootData.children);
    return tempRootData;
}

