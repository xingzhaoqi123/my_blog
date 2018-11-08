<template>
    <div class="article">
        <div class="blog_con">
            <div class="box_article">
                <div class="post">
                    <div class="sourse "><span>{{blog.sourse == 1?'原':(blog.sourse == 2 ?'转':'翻')}}</span></div>
                    <h1>{{blog.title}}</h1>
                    <h3 class="date">{{parseTime(blog.updateTime)}}&nbsp;&nbsp;&nbsp;&nbsp;浏览次数:{{1111}}次
                        <span class="author" v-if="blog.author">作者：{{blog.author.nickname}}</span>
                    </h3>

                    <div class="ql-container ql-snow">
                        <el-card>版权声明：本文为博主原创文章，未经博主允许不得转载。{{href}}</el-card>
                        <div class="markdown-body ql-editor" v-html="blog.content">
                        </div>
                    </div>
                    <!--评论区域-->
                    <!-- <Comment :commentList="commentList" :blogDate="idea.blogDate" :user="user" :currentUser="userName" :blogTitle="idea.blogTitle" :likeCount.sync="idea.likeCount" @commitSuccess="getComment">
                    </Comment> -->
                </div>
                <!-- <div class="operator">
                    <a id="newer" class="blog-nav">&nbsp;&lt;上一篇</a>
                    <a id="older" class="blog-nav">下一篇&nbsp;&gt;</a>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            href: "",
            id: "",
            blog: {}
        };
    },
    methods: {
        getBlog() {
            this.$axios
                .get(`/blog/person/${this.id}`)
                .then(res => {
                    if (res.code == 200) {
                        this.blog = res.data;
                    } else {
                        this.$message.error(res.msg);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
    created() {
        this.id = this.$route.params.id;
        this.getBlog();
        // console.log(location);
        this.href = location.href;
    }
};
</script>

<style lang="less" scoped>
.article {
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
.box_article {
    overflow: auto;
    position: absolute;
    width: 1080px;
    margin-left: 250px;
    height: 560px;
    // background-image: linear-gradient(135deg, #3c8ce7 10%, #00eaff 100%);
    background-color: #fff;
    border-radius: 10px;
    opacity: 0.9;
    animation: mBoxA 0.5s ease-out 1;
    // transition: opacity 0.5s ease;
    &::-webkit-scrollbar {
        background-image: linear-gradient(135deg, #81ffef 10%, #f067b4 100%);
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background-image: linear-gradient(135deg, #3b2667 10%, #bc78ec 100%);
    }
}
@keyframes mBoxA {
    0% {
        // opacity: 0;
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
        // opacity: 0.7;
    }
}

@media screen and (max-width: 1000px) {
    .box_article {
        margin-top: 50px;
        height: 540px;
    }
}
.post {
    position: relative;
    padding: 15px;
    border-bottom: 1px solid #e6e6e6;
    color: #000;
    .sourse {
        float: left;
        margin-right: 10px;
        width: 40px;
        height: 40px;
        background-image: linear-gradient(135deg, #2afadf 10%, #4c83ff 100%);
        border-radius: 50%;
        text-align: center;
        span {
            line-height: 40px;
            font-size: 20px;
            font-family: "SF Pro Display", Roboto, Noto, Arial, "PingFang SC",
                "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
        }
    }
    h1 {
        font-size: 32px;
        margin: 0 0 45px;
        letter-spacing: 1px;
    }
    .author {
        float: right;
        margin-right: 150px;
    }
    .date {
        font-size: 14px;
        // color: #999;
        // margin: 0 0 30px;
        letter-spacing: 1px;
    }
    .markdown-body {
        max-width: 800px;
        box-sizing: border-box;
        padding: 45px;
        /deep/img {
            position: relative;
            width: 100%;
            height: 100%;
            opacity: 1;
        }
        @media (max-width: 767px) {
            padding: 15px;
        }
    }
    @media (max-width: 420px) {
        h1 {
            font-size: 24px;
            margin: 0 0 30px;
        }
        h3 {
            font-size: 12px;
            margin: 0 0 20px;
        }
    }
}
.operator {
    .blog-nav {
        position: fixed;
        bottom: 60px;
        height: 20px;
        line-height: 20px;
        color: #444;
        text-decoration: none;
        cursor: pointer;
        letter-spacing: 1px;
        border-bottom: 3px solid transparent;
        &:hover {
            color: #000;
            border-bottom-color: #000;
        }
    }
    #newer {
        left: 290px;
    }
    #older {
        right: 40px;
    }
    @media (max-width: 420px) {
        .blog-nav {
            font-size: 14px;
        }
    }
    @media (max-width: 1000px) {
        display: none;
    }
}
</style>
