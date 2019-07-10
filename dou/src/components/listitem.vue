<template>
    <div class='listWrap'>
        <div class='left'>
            <h4>
                <slot name='title'></slot>
            </h4>
            <p>
                <slot name='desc'></slot>
            </p>
            <div class='sep'></div>
            <p class='author'>作者：{{ author }}</p>
        </div>
        <img :src='url' />
    </div>
</template>

<script>
export default {
  props: ["author", "url"]
};
</script>

<style>
.listWrap {
  padding: 0.26rem;
  text-align: left;
  height: 3rem;
  border-bottom: 1px solid #eee;
}
.listWrap img {
  width: 2rem;
  height: 2rem;
  float: right;
}
.listWrap .left {
  width: 65%;
  float: left;
}
.listWrap p {
  margin: 0.2rem 0;
  color: #999;
  font-size: 0.28rem;
}
.listWrap p span {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.listWrap .author {
  color: #ccc;
  font-size: 0.24rem;
}
.listWrap .sep {
  width: 0.4rem;
  height: 1px;
  background: #eee;
}
.left h4 {
  text-align: justify;
  font-size: 0.28rem;
  font-weight: 500;
  line-height: 1.41;
  color: #494949;
  margin-bottom: 0.12rem;
}
</style>