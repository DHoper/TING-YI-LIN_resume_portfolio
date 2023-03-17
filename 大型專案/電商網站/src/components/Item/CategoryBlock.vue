<script setup>
</script>

<template>
    <div class="categoryBlock">
        <div class="category">
            <div class="categoryBox">
                <img src="/assets/shared/desktop/image-category-thumbnail-headphones.png">
                <div class="textBox">
                    <h3>耳罩式耳機</h3>
                    <router-link class="link" to="/productList/headphones">
                        逛商店<img src="/assets/shared/desktop/icon-arrow-right.svg">
                    </router-link>
                </div>
            </div>
            <div class="categoryBox">
                <img src="/assets/shared/desktop/image-category-thumbnail-speakers.png">
                <div class="textBox">
                    <h3>音&nbsp&nbsp箱</h3>
                    <router-link class="link" to="/productList/speakers">
                        逛商店<img src="/assets/shared/desktop/icon-arrow-right.svg">
                    </router-link>
                </div>
            </div>
            <div class="categoryBox">
                <img src="/assets/shared/desktop/image-category-thumbnail-earphones.png">
                <div class="textBox">
                    <h3>耳塞式耳機</h3>
                    <router-link class="link" to="/productList/earphones">
                        逛商店<img src="/assets/shared/desktop/icon-arrow-right.svg">
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang=scss scoped>
.categoryBlock {
    width: 75rem;
    margin: 8rem auto 18rem auto;
    padding-top: 1px;

    .category {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .categoryBox {
            position: relative;
            width: 30%;
            height: 13rem;

            &:nth-child(2) {
                margin: 0 5rem;
            }

            &:nth-child(1)>img {
                transform: translateY(0rem);
            }

            &:nth-child(3)>img {
                transform: translateY(1.4rem);
            }

            &>img {
                width: 15rem;
                pointer-events: none;
                user-select: none;
                margin: auto;
                display: block;
                transform: translateY(.7rem);

            }

            .textBox {
                position: absolute;
                top: 42%;
                left: -50%;
                transform: translateX(50%);
                width: 100%;
                height: 100%;
                background: #F1F1F1;
                box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.2);
                border-radius: 8px;
                z-index: -1;
                flex-shrink: 0;
                display: flex;
                flex-direction: column;
                align-items: center;

                h3 {
                    font-family: 'Manrope';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 1.2rem;
                    text-align: center;
                    letter-spacing: 0.5rem;
                    color: #000000;
                    margin-top: 31.5%;
                    margin-left: 0.5rem;
                    
                }

                .link {
                    margin-top: 1rem;
                    margin-left: 0.3rem;
                    color: rgba(153, 150, 150, 0.988)0;
                    font-size: .8rem;
                    font-weight: 300;
                    letter-spacing: 0.3rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 1s ease-out;

                    &>img {
                        transition: all 1s ease-out;
                        display: inline;
                        // width: 1rem;
                        height: .6rem;
                    }

                    &:hover {
                       color: #D87D4A;
                       font-weight: 400;
                    }

                    &:hover>img {
                        transform: translateX(.5rem);
                    }
                }
            }
        }
    }

}
</style>