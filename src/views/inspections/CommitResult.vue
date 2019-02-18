<template>
    <div id="project-page">
        <article>
            <h1>{{ commitInfo.owner }}/{{ commitInfo.projectName }}</h1>
        </article>
        <main>
            <section>
                <div id="brief-info">
                    <div>
                        <h2 class="pass">
                            <small class="commit-branch" title="master">{{ commitInfo.branch }}</small>
                            {{ commitInfo.message }}
                        </h2>
                        <div>
                            <ul class="list-icon">
                                <li>
                                    <span>Commit</span>{{ commitInfo.id }}
                                </li>
                                <li>
                                    <span>Branch</span>{{ commitInfo.branch }}
                                </li>
                                <li>
                                    {{ commitInfo.committer ? commitInfo.committer.name : '' }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 class="pass">
                            <span>passed</span>
                        </h3>
                        <ul class="list-icon">
                            <li>총 {{ commitInfo.totalPages - commitInfo.excludePages}} 장 ( {{ commitInfo.excludePages }} 장 제외)</li>
                            <li>총 {{ commitInfo.totalSentences}} 문장</li>
                            <li>총 {{ commitInfo.totalSuggests}} 수정 제안</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section class="check-result">
                <div v-for="(item, idx) in checkResult" :key="idx">
                    <h3 class="item">{{ item.file }}</h3>
                    <div class="item">{{ item.contents }}</div>
                    <div v-for="(suggest, idx1) in item.suggestions" :key="idx1">
                        <div style="font-size: 18px; margin-top: 12px;">
                            <strong>{{ suggest.token }} -> <span v-for="(x, idx) in suggest.suggestions" :key="idx">{{ x }}</span></strong>
                        </div>
                        <div>{{ suggest.info }}</div>
                    </div>
                    
                </div>
            </section>
        </main>
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

    private get commitInfo() {
        return this.$store.state.checkBrief;
    }

    private get projectName() {
        return this.$store.getters.repositoryName;
    }

    private get checkResult() {
        return this.$store.state.checkResult;
    }

    private async created() {
        await this.$store.dispatch(
            'fetchCheckBrief', {
                service: this.$route.params.service,
                owner: this.$route.params.owner,
                project: this.$route.params.project,
                commit: this.$route.params.commit,
            },
        );

        await this.$store.dispatch(
            'fetchCheckResult', {
                service: this.$route.params.service,
                owner: this.$route.params.owner,
                project: this.$route.params.project,
                commit: this.$route.params.commit,
            },
        );
    }
}
</script>
