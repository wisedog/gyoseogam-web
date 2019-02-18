<template>
    <header class="top">
        <div>
            <h1 id="logo" class="logo">
                <router-link to="/">교서감</router-link>
            </h1>
            <nav>
                <ul>
                    <li>
                        <router-link :to="{name: 'about'}">About Us</router-link>
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
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TopHeader extends Vue {

}
</script>