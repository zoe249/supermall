import { request } from './request'

export function getDetail(iid) {
    return request({
        url: `detail`,
        params: {
            iid
        }
    })
}


// 详情推荐
export function getRecommend() {
    return request({
        url: `recommend`
    })
}

export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.lowNowPrice
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realRrice = itemInfo.lowNowPrice
    }
}


export class Shop {
    constructor(shopInfo) {
        this.lofo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods
    }
}


export class GoodsParam {
    constructor(info, rule) {
        // image可能没有值
        this.image = info.image ? info.images[0] : '';
        this.infos = info.set;
        this.size = rule.tables;
    }
}