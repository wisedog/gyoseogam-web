<template>
  <div class="main">
    <article>
        <section class="title">
            <h1>지속적 통합(CI)용 한글 맞춤법 서비스</h1>
            <h3>지금은 개발 중입니다... </h3>
        </section>
        <section id="recent">
            <h3>최근 검사 요청</h3>
            <ul>
                <li v-for="(item, idx) in $store.state.events" :key="idx">
                    <div><span>Commit</span>{{ item.after }}</div>
                    <div><span><i class="fas fa-code-branch"></i></span>{{ item.ref }}</div>
                    <div><span><i class="far fa-clock"></i></span>{{ formattedTime(item.head_commit.timestamp) }}</div>
                    <div><span><i class="far fa-user"></i></span>{{ item.head_commit.committer.username}}</div>
                    <div>
                        <span>
                            <a :href="item.repository.html_url" target="_blank"><i class="fab fa-github"></i></a>
                        </span>
                        <span>
                            <router-link :to="{name: 'commitResult', params: {service: 'gh', owner: item.repository.owner.name, project: item.repository.name, commit: item.after}}">검사결과 보기</router-link>
                        </span>
                    </div>
                </li>
            </ul>
        </section>
    </article>
    <footer>
        <div class="wrapper">
            <p>교서감은 조선 초기 교열과 출판을 담당하는 관청이었습니다.</p>
            <p>부산대학교 인공지능연구실과 (주)나라인포테크의 한국어 맞춤법/문법 검사 API를 사용하였으며, 비영리/개인 조건으로 사용허가를 받았습니다.</p>
            <p>오픈소스 프로젝트만 검사 가능합니다.</p>
        </div>
    </footer>
  </div>
</template>



<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import moment from 'moment';

@Component
export default class Home extends Vue {
    private created() {
        this.$store.dispatch('fetchEvents');
    }

    private formattedTime(time: string) {
        return moment(time).format('YYYY-MM-DD, HH:mm:ss');
    }
}
</script>
