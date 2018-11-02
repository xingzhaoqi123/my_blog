<template>
    <div class="wraper">
        <div class="content self" @click.self="hide">
            <div class="m-box" :style="{'opacity': opacity}">
                <div class="box-head">
                    <p class="box-name"></p>
                </div>
                <div class="box-content">
                    <p class="title">桀骜不驯，戎码一生</p>
                    <p>从明天起, 做一个幸福的人, 喂马, 劈柴, 周游世界。</p>
                    <p>一个人有两个我，一个在黑暗中醒着，一个在光明中睡着。</p>
                    <p>若我会见到你，事隔经年。我如何向你招呼，以眼泪，以沉默。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import NavBar from "../../components/Nav";
export default {
    data() {
        return {
            opacity: 0.9
        };
    },
    // components: { NavBar },
    methods: {
        hide() {
            this.opacity === 0.9 ? (this.opacity = 0) : (this.opacity = 0.9);
        }
    }
};
</script>

<style lang="less">
.self {
    position: fixed;
    width: 100%;
    height: 100%;
    background-image: url("http://ph4x1bazq.bkt.clouddn.com/50e412cf4b1b704f44ab8aa9297ed1dc.jpg");
    background-position: 50%;
    opacity: 0.5;
    background-repeat: no-repeat;
    background-size: cover;
}

.m-box {
    position: absolute;
    width: 620px;
    height: 540px;
    top: 50%;
    margin-top: -270px;
    left: 50%;
    margin-left: -310px;
    background: #fff;
    border-radius: 10px;
    opacity: 0.9;
    animation: mBox 0.5s ease-out 1;
    transition: opacity 0.5s ease;
}

@keyframes mBox {
    0% {
        opacity: 0;
        transform: translate3d(-10px, 0, 0);
    }
    25% {
        transform: translate3d(10px, 0, 0);
    }
    50% {
        transform: translate3d(-10px, 0, 0);
    }
    75% {
        transform: translate3d(10px, 0, 0);
    }
    100% {
        opacity: 0.9;
    }
}

.box-head {
    position: relative;
    width: 100%;
    height: 55%;
    background: url("http://ph4x1bazq.bkt.clouddn.com/e28a08373c3cff009d44240f75b1dfa9.jpg")
        center no-repeat;
    background-size: cover;
    border-radius: 4px 4px 0 0;
    text-align: center;
    box-shadow: inset 0 -70px 100px -50px rgba(0, 0, 0, 0.5);

    .box-name {
        font-size: 25px;
        padding-top: 20%;
        color: white;
    }
}

.box-content {
    font-size: 15px;
    padding: 8px 5%;
    text-align: center;

    p {
        line-height: 30px;
    }

    .title {
        font-size: 25px;
        font-weight: bold;
        line-height: 25px;
        text-align: center;
    }
}

@media screen and (max-width: 640px) {
    .m-box {
        top: 60%;
        margin-left: -49%;
        width: 98%;
        height: 430px;
    }

    .box-head {
        height: 50%;
    }

    .box-content {
        padding: 10px 10px;
        font-size: 14px;

        p {
            text-align: left;
        }
    }
}
</style>
