<script setup>
import CategoryBlock from '../components/Item/CategoryBlock.vue';
import CopyBlock from '../components/Item/CopyBlock.vue';
</script>

<template>
    <div id="product">
        <router-link :to="`/productList/${product.category}`" class="backButton">返回</router-link>
        <div class="haedBlock">
            <div class="pictureBlock" :style="{ 'background-image': 'url(' + product.image + ')' }"></div>
            <div class="textBlock">
                <h1>{{ product.name[0] }}</h1>
                <h1>{{ product.name[1] }}</h1>
                <p>{{ product.introduction }}</p>
                <span>${{ product.price }}</span>
                <div class="purchaseArea">
                    <form @submit.prevent="submitForm">
                        <div class="quantityInput">
                            <button class="decrement" type="button" @click="decrementQuantity">-</button>
                            <input type="text" class="quantity" id="quantity" name="quantity" v-model="quantity" />
                            <button class="increment" type="button" @click="incrementQuantity">+</button>
                        </div>
                        <base-button text="加入購物車" type="submit"></base-button>
                    </form>
                </div>
            </div>
        </div>
        <div class="detailBlock">
            <div class="featuresBlock">
                <h3>產品特色</h3>
                <p>{{ product.features }}</p>
            </div>
            <div class="contentsBlock">
                <h3>內容物</h3>
                <p v-for="(content, index) in product.contents" :key="index"><span>{{ index + 1 }}</span>
                <p>{{ content }}</p>
                </p>
            </div>
        </div>
        <div class="imgGalleryBlock">
            <div class="leftPic">
                <div class="topPic" :style="{ 'background-image': 'url(' + getImageUrl() + ')' }"></div>
                <div class="bottomPic" :style="{ 'background-image': 'url(' + getImageUrl() + ')' }"></div>
            </div>
            <div class="rightPic" :style="{ 'background-image': 'url(' + getImageUrl() + ')' }"></div>
        </div>
        <div class="recommendBlock">
            <h2>您可能也感興趣</h2>
            <div class="productBlock">
                <div class="randomProduct">
                    <div class="img" :style="{ 'background-image': 'url(' + randomProducts[0].image + ')' }"></div>
                    <div class="h3">{{ randomProducts[0].name }}</div>
                    <base-button text="查看商品" :link="{ path: `/product/${randomProducts[0]._id}` }"></base-button>
                </div>
                <div class="randomProduct">
                    <div class="img" :style="{ 'background-image': 'url(' + randomProducts[1].image + ')' }"></div>
                    <div class="h3">{{ randomProducts[1].name }}</div>
                    <base-button text="查看商品" :link="{ path: `/product/${randomProducts[1]._id}` }"></base-button>
                </div>
                <div class="randomProduct">
                    <div class="img" :style="{ 'background-image': 'url(' + randomProducts[2].image + ')' }"></div>
                    <div class="h3">{{ randomProducts[2].name }}</div>
                    <base-button text="查看商品" :link="{ path: `/product/${randomProducts[2]._id}` }"></base-button>
                </div>
                <div class="randomProduct">
                    <div class="img" :style="{ 'background-image': 'url(' + randomProducts[3].image + ')' }"></div>
                    <div class="h3">{{ randomProducts[3].name }}</div>
                    <base-button text="查看商品" :link="{ path: `/product/${randomProducts[3]._id}` }"></base-button>
                </div>
            </div>
        </div>
        <CategoryBlock />
        <CopyBlock />
    </div>
</template>
<script>
import { getProduct } from '../router.js';
import { getProducts } from '../router.js';


export default {
    data() {
        return {
            product: Object,
            randomProducts: Array,
            quantity: 1,
        };
    },
    methods: {
        async getData() {
            const response = await getProduct(this.id);
            this.product = response[0];
            const nameArray = this.product.name.split(" ");
            const h1 = nameArray.slice(0, 2).join(" ");
            const h2 = nameArray.slice(2).join(" ");
            this.product.name = [h1, h2];
        },
        async getRandomData() {
            const category = ["headphones", "earphones", "speakers", "headphones"];
            const middleArray = [];
            for (let i = 0; i < category.length; i++) {
                const response = await getProducts(category[i]);
                middleArray.push(response[Math.floor(Math.random() * response.length)]);
            }
            this.randomProducts = middleArray;
        },
        incrementQuantity() {
            this.quantity++;
        },
        decrementQuantity() {
            if (this.quantity > 0) {
                this.quantity--;
            }
        },
        getImageUrl() {
            return `"/assets/product/image-gallery (${Math.floor(Math.random() * 18) + 1}).jpg"`;
        },
    },
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    components: {
        CategoryBlock,
        CopyBlock,
    },
    created() {
        this.getData();
        this.getRandomData();
    },
    watch: {
        '$route': {
            handler() {  //handler: 當 $route 發生變化時被調用
                this.getData();
                this.getRandomData();
            },
            immediate: true  //可選的，設置為true時當組件被創建，handler 方法會被立即調用一次。
        }
    },
};
</script>
<style lang="scss" scoped>
#product {
    width: 100%;
    position: relative;
    padding-top: 1px;
    position: relative;
    z-index: 1;

    .backButton {
        position: absolute;
        top: 2vw;
        left: 3vw;
        font-weight: 500;
        font-size: 1.2rem;
        letter-spacing: .5rem;
        display: inline-block;
        padding: .7rem 1rem;
        padding-left: calc(.5rem + 1rem);
        font-size: 1rem;
        font-weight: bold;
        text-decoration: none;
        border-bottom: 1.5px solid black;
        color: black;
        transition: all .5s ease;
        opacity: .65;

        &:hover {
            color: rgb(192, 190, 190);
            opacity: 1;
            cursor: pointer;
            background-color: black;
            border-radius: 4px;
            border: none;
            transition: all .5s ease;
        }

        &:active {
            transform: scale(1.05);
            transition: none;
        }
    }

    .haedBlock {
        width: 75rem;
        min-height: 35rem;
        display: flex;
        gap: 7.4rem;
        align-items: center;
        margin: auto;
        margin-top: 8%;

        .pictureBlock {
            overflow: hidden;
            width: 50%;
            background-size: contain;
            background-repeat: no-repeat;
            border-radius: 6px;
            min-width: 540px;
            min-height: 35rem;
        }

        .textBlock {
            width: 50%;
            height: 100%;

            h1 {
                font-weight: 700;
                font-size: 2.7rem;
                line-height: 2rem;
                letter-spacing: 0.09rem;
                text-transform: uppercase;
                margin-bottom: 1rem;

                &:first-child {
                    margin-top: auto;
                }
            }

            p {
                font-weight: 500;
                font-size: 1.2rem;
                line-height: 2rem;
                opacity: .6;
                margin-top: 3rem;
                margin-bottom: 3rem;
            }

            span {
                font-weight: 700;
                font-size: 1.5rem;
                line-height: 1.5rem;

                letter-spacing: 0.09rem;
                text-transform: uppercase;

            }

            .purchaseArea {
                margin-top: 3rem;

                form {
                    display: flex;

                    .quantityInput {
                        display: flex;
                        background: #F1F1F1;
                        width: 7.5rem;
                        height: 3rem;
                        margin-right: 3rem;

                        button {
                            font-weight: 700;
                            font-size: 1.2rem;
                            line-height: 1.125rem;
                            text-align: center;
                            opacity: 0.25;
                            border: none;
                            transition: all .3s ease-in;
                            padding: 0 .9rem;


                            &:hover {
                                color: #D87D4A;
                                opacity: 1;
                                cursor: pointer;
                            }

                            &:active {
                                font-size: 1.3rem;
                                transition: none;
                            }
                        }

                        input {
                            border: none;
                            background: #F1F1F1;
                            outline: none;
                            font-size: 1rem;
                            color: #424141ca;
                            padding: 0;
                            width: 100%;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }

    .detailBlock {
        width: 75rem;
        display: flex;
        gap: 5rem;
        margin: auto;
        margin-top: 8rem;

        .featuresBlock {
            width: 55%;

            h3 {
                font-weight: 700;
                font-size: 32px;
                line-height: 36px;
                letter-spacing: .8rem;
            }

            p {
                margin-top: 3rem;
                opacity: .7;
                letter-spacing: .4rem;
                line-height: 2rem;
            }
        }

        .contentsBlock {
            width: 45%;

            h3 {
                font-weight: 700;
                font-size: 32px;
                line-height: 36px;
                letter-spacing: .8rem;
                margin-bottom: 3rem;
            }


            &>p {
                margin-top: .5rem;
                opacity: .7;
                letter-spacing: .4rem;
                line-height: 1.8rem;
                display: flex;

                span {
                    color: #D87D4A;
                    margin-right: .7rem;
                }
            }
        }
    }

    .imgGalleryBlock {
        width: 75rem;
        display: flex;
        gap: 1.5rem;
        margin: auto;
        margin-top: 8rem;
        height: 37rem;

        .leftPic {
            display: flex;
            flex-direction: column;
            width: 40%;
            height: 37rem;
            gap: 1.5rem;

            .topPic {
                background-repeat: no-repeat;
                background-size: cover;
                height: 50%;
                border-radius: .33rem;
            }

            .bottomPic {
                background-repeat: no-repeat;
                background-size: cover;
                height: 50%;
                border-radius: .33rem;
            }
        }

        .rightPic {
            background-repeat: no-repeat;
            background-size: cover;
            width: 60%;
            height: 37rem;
            border-radius: .33rem;
        }
    }

    .recommendBlock {
        width: 75rem;
        margin: auto;
        margin-top: 8rem;
        height: 35rem;
        margin-bottom: 8rem;

        h2 {
            text-align: center;
            font-weight: 700;
            font-size: 2rem;
            line-height: 2.5rem;
            letter-spacing: .08rem;
            margin-bottom: 5rem;
        }

        &>.productBlock {
            width: 100%;
            display: flex;
            justify-content: space-between;

            .randomProduct {
                width: 33.33%;
                display: flex;
                flex-direction: column;
                align-items: center;

                .img {
                    width: 270px;
                    height: 280px;
                    background-repeat: no-repeat;
                    background-size: cover;
                    border-radius: 3px;
                }

                .h3 {
                    font-weight: 700;
                    font-size: .9rem;
                    margin: 2rem 0;
                    display: block;
                }

            }
        }
    }
}
</style>