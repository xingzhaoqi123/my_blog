<template>
    <div class=" blogList">
        <div class="blog_con">
            <div class="box_blog" v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
                <ul class="list fl-column">
                    <li v-for="n in List">
                        <span class="date">{{formatDateEng(n.updateTime)}}</span>
                        <span class="sourse"><span class="typeface">{{n.sourse == 1?'原':(n.sourse == 2 ?'转':'翻')}}</span></span>
                        <span class="title">
                            <router-link :to="{path:`/blog/article/${n._id}`}" class="router_link">{{n.title}}</router-link>
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
            loading: false,
            List: [],
            page_size: 8,
            total: 0,
            pageindex: 1
        };
    },
    methods: {
        getTotal() {
            this.$axios.get("/blog/total").then(res => {
                if (res.code == 200) {
                    this.total = res.total;
                }
            });
        },
        getBlogList() {
            this.loading = true;
            let params = {
                page: this.pageindex,
                page_size: this.page_size
            };
            this.$axios.get("/blog/list", params).then(res => {
                if (res.code == 200) {
                    this.List = res.data;
                    this.getTotal();
                    this.loading = false;
                } else {
                    this.$message.error(res.msg);
                }
            });
        }
    },
    created() {
        this.getBlogList();
    }
};
</script>
<style lang="less" scoped>
.blogList {
    position: fixed;
    width: 100%;
    height: 100%;
    background-image: url("http://ph4x1bazq.bkt.clouddn.com/50e412cf4b1b704f44ab8aa9297ed1dc.jpg");
    background-position: 50%;
    opacity: 0.7;
    background-repeat: no-repeat;
    background-size: cover;
}
.blog_con {
    padding: 20px;
}
.box_blog {
    overflow: auto;
    position: absolute;
    width: 1080px;
    margin-left: 250px;
    height: 560px;
    background: #fff;
    border-radius: 10px;
    opacity: 0.7;
    animation: mBox 0.5s ease-out 1;
    transition: opacity 0.5s ease;
    &::-webkit-scrollbar {
        background-image: linear-gradient(135deg, #81ffef 10%, #f067b4 100%);
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background-image: linear-gradient(135deg, #3b2667 10%, #bc78ec 100%);
    }
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
        opacity: 0.45;
    }
}
@media screen and (max-width: 1000px) {
    .box_blog {
        margin-top: 50px;
        height: 540px;
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
        .sourse {
            line-height: 56px;
            margin-left: 50px;
            display: block;
            width: 40px;
            height: 40px;
            background-image: linear-gradient(
                135deg,
                #81ffef 10%,
                #f067b4 100%
            );
            border-radius: 50%;
            text-align: center;
            .typeface {
                display: block;
                line-height: 56px;
                transform: translateY(-10%);
            }
        }
        .date {
            white-space: nowrap;
            line-height: 56px;
            font-size: 12px;
            color: #000;
        }
        .title {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            line-height: 56px;
            margin-left: 10px;
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
