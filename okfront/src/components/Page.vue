<template>
    <el-container>
        <el-header>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#545c64"
                text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
                <!-- <el-image :src="require('../assets/headIcon.jpg')" fit="contain" /> -->
                <el-menu-item index="1"><el-text
                        style="color: white; font-size: 18px; margin: 10px;">公告</el-text></el-menu-item>
                <el-menu-item index="4"><el-text
                        style="color: white; font-size: 18px;margin: 10px;">资源</el-text></el-menu-item>
            </el-menu>
        </el-header>
    </el-container>
</template>

<script setup>
import { ref } from 'vue'
const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>