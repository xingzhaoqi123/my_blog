<template>
    <div class="wraper">
        <div class="content self">
            <div class="box">
                <ul class="list fl-column">
                    <li v-for="n in List">
                        <span class="date">{{n.blogDate}}</span>
                        <span class="title">
                            <router-link :to="'/article/'+n.blogDate" class="router_link" >{{n.blogTitle}}</router-link>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            List: [
                {
                    blogDate: 12,
                    blogTitle: "test"
                },
                {
                    blogDate: 12,
                    blogTitle: "test"
                },
                {
                    blogDate: 12,
                    blogTitle: "test"
                },
                {
                    blogDate: 12,
                    blogTitle: "test"
                },
                {
                    blogDate: 166666666666662,
                    blogTitle: "test"
                },
                {
                    blogDate: 14555555555555555552,
                    blogTitle: "test"
                },
                {
                    blogDate: 14444444444442,
                    blogTitle: "test"
                },
                {
                    blogDate: 122222222222222222,
                    blogTitle: "test"
                },
                {
                    blogDate: 133333333333332,
                    blogTitle: "test"
                },
                {
                    blogDate: 1555555555555555552,
                    blogTitle: "test"
                },
                {
                    blogDate: 144444444444444442,
                    blogTitle: "test"
                },
                {
                    blogDate: 333333333333333333,
                    blogTitle: "test"
                },
                {
                    blogDate: 222222222222222222,
                    blogTitle: "test"
                },
                {
                    blogDate: 1111111111111,
                    blogTitle: "test2"
                }
            ]
        };
    },
    methods: {}
};
</script>
<style lang="less" scoped>
.self {
    position: fixed;
    width: 100%;
    height: 100%;
    background-image: url("http://ph4x1bazq.bkt.clouddn.com/50e412cf4b1b704f44ab8aa9297ed1dc.jpg");
    background-position: 50%;
    opacity: 0.5;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 20px;
}
.box {
    // overflow: auto;
    overflow-y: scroll;
    position: absolute;
    width: 1080px;
    margin-left: 250px;
    height: 560px;
    background: #fff;
    border-radius: 10px;
    opacity: 0.7;

    &::-webkit-scrollbar {
        background-image: linear-gradient(135deg, #81ffef 10%, #f067b4 100%);
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background-image: linear-gradient(135deg, #3b2667 10%, #bc78ec 100%);
    }
    // animation: mBox 0.5s ease-out 1;
    // transition: opacity 0.5s ease;
}
@media screen and (max-width: 1000px) {
    .box {
        margin-top: 50px;
    }
}
.list {
    list-style-type: none;
    padding: 0 80px;
    li {
        position: relative;
        display: flex;
        flex-direction: row;
        flex-basis: 56px;
        align-content: center;
        margin: 30px 0 30px;
        border-bottom: 1px solid #07273c;
        @media (max-width: 1000px) {
            margin: 20px 10px 20px 10px;
        }
        &::before {
            position: absolute;
            content: "";
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            background-color: #666;
            transform-origin: 100% 0;
            transform: scaleX(0);
            transition: transform 0.5s;
        }
        &:hover::before {
            transform-origin: 0 0;
            transform: scaleX(1);
        }
        .date {
            white-space: nowrap;
            line-height: 56px;
            font-size: 12px;
            color: #999;
        }
        .title {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            line-height: 56px;
            margin-left: 50px;
            font-size: 20px;
            letter-spacing: 1px;
            .router_link {
                color: #9a4b46;
                text-decoration-line: none;
            }
            @media (max-width: 700px) {
                font-size: 16px;
            }
        }
    }
}
</style>
