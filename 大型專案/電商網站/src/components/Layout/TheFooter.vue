<template>
    <div id="footer">
        <div class="col1">
            <img class="logo" src="/assets/shared/desktop/logo.svg">
            <p>
                Audiophile 是一站式服務，可滿足您的音頻需求。我們是一個由音樂愛好者和音響專家組成的小團隊，致力於幫助您充分利用個人音頻。快來參觀我們的演示設施 - 我們每週 7 天開放。
            </p>
            <span>Copyright 2023</span>
        </div>
        <div class="col2">
            <ul class="menu">
                <li><router-link to="/" >HOME</router-link></li>
                <li><router-link to="/productList/headphones" >HEADEPHONES</router-link></li>
                <li><router-link to="/productList/speakers" >SPEAKERS</router-link></li>
                <li><router-link to="/productList/earphones" >EARPHONES</router-link></li>
            </ul>
            <div class="socialPlatform">
                <img src="/assets/shared/desktop/icon-facebook.svg"><img
                    src="/assets/shared/desktop/icon-instagram.svg"><img src="/assets/shared/desktop/icon-twitter.svg">
            </div>
        </div>
    </div>
</template>
<script setup></script>
<style lang="scss" scoped>
#footer {
    width: 100%;
    height: 22rem;
    background-color: #000000;
    display: flex;
    margin-top: 10%;
    padding: 5% 15%;
    color: #ffffff;


    .col1 {
        width: 50%;

        .logo {
            width: 10rem;
            height: 2rem;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            flex: none;
            flex-grow: 0;
        }

        p {
            font-weight: 500;
            font-size: .95rem;
            line-height: 1.7rem;
            color: #b0aeae;
            margin-top: 2.5rem;
        }
        span {
            display: block;
            margin-top: 2rem;
            color: #b0aeae;
        }
    }

    .col2 {
        width: 50%;
        margin-left: 15%;

        .menu {
            display: flex;
            justify-content: space-between;
            // height: 1.5625rem;
            flex: none;
            flex-grow: 0;

            li {
                font-weight: 700;
                font-size: .9rem;
                line-height: 1.5625rem;
                text-transform: uppercase;
                color: #ffffff;
                letter-spacing: 2px;
            }
        }

        .socialPlatform {
            margin-top: 5rem;
            display: flex;
            flex-direction: row-reverse;

            &>img {
                margin-left: 1rem;
            }
        }
    }

}
</style>