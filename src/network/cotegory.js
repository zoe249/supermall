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