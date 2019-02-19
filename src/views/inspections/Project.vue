<template>
    <div id="project-page">
        <article v-if="projectInfo.brief">
            <section>
                <h1>{{ projectInfo.brief.owner }}/{{ projectInfo.brief.projectName }}</h1>
            </section>
            <section>
                <h3>최근 검사 결과</h3>
                <div id="brief-info">
                    <div>
                        <h2 class="pass">
                            <small class="commit-branch" title="master">{{ projectInfo.branch }}</small>
                            {{ projectInfo.latest.message }}
                        </h2>
                        <div>
                            <ul class="list-icon">
                                <li>
                                    <span>Commit</span>{{ projectInfo.latest.id }}
                                </li>
                                <li>
                                    <span>Branch</span>{{ projectInfo.latest.branch }}
                                </li>
                                <li>
                                    {{ projectInfo.latest.committer ? projectInfo.latest.committer.name : '' }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 class="pass" v-if="projectInfo.brief.status !== 500">
                            <span>검사 성공</span>
                        </h3>
                        <h3 v-else>
                            <span>검사 실패</span>
                        </h3>
                        <ul class="list-icon">
                            <li>총 {{ projectInfo.latest.totalPages - projectInfo.latest.excludePages}} 장 ( {{ projectInfo.latest.excludePages }} 장 제외)</li>
                            <li>총 {{ projectInfo.latest.totalSentences}} 문장</li>
                            <li>총 {{ projectInfo.latest.totalSuggests}} 수정 제안</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <div>과거 검사 이력 보기(TODO)</div>
            </section>
        </article>
        <article v-else>
            <div>Loading...</div>
        </article>
    </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class Project extends Vue {

    private get projectInfo() {
        return this.$store.state.projectDetail;
    }

    private get projectName() {
        return this.$store.getters.repositoryName;
    }

    private get checkResult() {
        return this.$store.state.checkResult;
    }

    private async created() {
        await this.$store.dispatch(
            'fetchProjectInfo', {
                service: this.$route.params.service,
                owner: this.$route.params.owner,
                project: this.$route.params.project,
            },
        );
    }
}
</script>
