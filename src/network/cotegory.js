import { request } from "./request";

export function getCotegory() {
    return request({
        url: "category"
    })
}

export function getCotegoryRight(maitKey = 3627) {
    return request({
        url: 'subcategory',
        params: {
            maitKey
        }
    })
}
export function getCategoryDetail(miniWallkey, type) {
    return request({
        url: 'subcategory/detail',
        params: {
            miniWallkey,
            type
        }
    })
}