import { useFish } from '/scripts/fish/FishDataProvider.js'

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}

import { FishList } from '/scripts/fish/FishList.js'

FishList()

import { useTip } from '/scripts/tips/TipDataProvider.js'
import { TipList } from '/scripts/tips/TipList.js'


const allTheTips = useTip()

for (const tip of allTheTips) {
    console.log(tip)
}

TipList()