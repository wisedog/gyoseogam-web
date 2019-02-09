<template>
  <div class="main">
    <header class="top">
        <div>
            <h1 id="logo" class="logo">
                <a href="/">교서감</a>
            </h1>
            <nav>
                <ul>
                    <li>
                        <a href="#" title="team">About Us</a>
                    </li>
                    <li>
                        <a href="#" title="Documentation">문서화</a>
                    </li>
                    <li>
                        <a title="Help">Help</a>
                    </li>
                    <li>
                        <button type="button">Sign in with GitHub</button>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    <article>
        <section class="title">
            <h1>Push와 동시에 한글 맞춤법을 검사해보세요!</h1>
            <h3>근데 지금은 개발중입니다... </h3>
        </section>
    </article>
    <footer>
        <div class="wrapper">
            한국어 맞춤법/문법 검사기의 저작권은 전적으로 부산대학교 인공지능연구실과 (주)나라인포테크에 있습니다.
        </div>
    </footer>
  </div>
</template>



<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>
