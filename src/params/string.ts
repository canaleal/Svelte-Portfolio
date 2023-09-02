
import type { ParamMatcher } from '@sveltejs/kit';
export const match: ParamMatcher = (param) => {
    const slugRegex = /^[\s\S]+$/;
    return slugRegex.test(param)
};