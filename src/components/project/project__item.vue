<template>
    <a href="" class="link-box">
        <div class="link-box__item link-box__title">
            <b>{{project.website}}</b>
        </div>
        <div class="link-box__item link-box__type">
            <b>тип сборки:</b> fs-vizitka
        </div>
        <div class="link-box__item link-box__email">
            <b>почта клиента:</b> {{project.email}}
        </div>
        <div class="link-box__footer">
            <div class="link-box__author"><b>{{project.username}}</b></div>
            <div class="link-box__date">03.03.2021</div>
        </div>
        
    </a>
</template>

<script>
export default {
    name: 'projectItem',
    props: {
        project: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>
<style lang="scss">

.link-box {
    padding: 20px 30px;
    background-color: #fff;
    cursor: pointer;
    transition: .2s ease-in-out all;
    text-decoration: none;
    color: #1E212B;

    &:hover {
        box-shadow: 0 4px 15px rgba(0,0,0,.25);
    }

    &__item {
        margin-bottom: 15px;
    }

    &__footer {
        display: flex;
        justify-content: space-between;
    }
}

</style>