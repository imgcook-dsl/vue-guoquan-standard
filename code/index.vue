<template src="./index.html"></template>
<style lang="scss" src="./index.scss" scoped></style>
<script>
export default {
    data() {
        return {
            stateData: 'test',
            loopData: [
                {
                    title: '小户型卫浴怎样才能装得高大上？',
                    coverImage: 'https://img.alicdn.com/tfs/TB1Txq6o7T2gK0jSZFkXXcIQFXa-684-684.png',
                    readCount: 200,
                    user: {
                        userImage: 'https://img.alicdn.com/tfs/TB1DWe6oYj1gK0jSZFOXXc7GpXa-60-60.png',
                        userName: '时尚家居'
                    },
                    url: 'https://www.imgcook.com'
                },
                {
                    title: '拥有超多功能的40平米简约小公寓了解一下',
                    coverImage: 'https://img.alicdn.com/tfs/TB1XRQTo7P2gK0jSZPxXXacQpXa-684-648.png',
                    readCount: 500,
                    user: {
                        userImage: 'https://img.alicdn.com/tfs/TB1DWe6oYj1gK0jSZFOXXc7GpXa-60-60.png',
                        userName: '花花设计工作'
                    },
                    url: 'https://www.imgcook.com/docs'
                }
            ],
            constants: {}
        };
    },
    methods: {
        isReadCountShow(readCount) {
            return readCount > 300;
        },
        fetch_example() {
            fetch('https://jsonplaceholder.typicode.com/todos/1', { method: 'GET', body: {} })
                .then(response => response.json())
                .then((data, error) => {
                    console.log(data);
                    return data;
                })
                .catch(e => {
                    console.log('error', e);
                });
        },
        dataHandler(dataMap) {
            console.log('dataHandler 11');
            return dataMap;
        },
        handleClick_1(e) {
            window.open(this.item.url);
        }
    },
    created() {
        console.log('constructor');
        this.fetch_example();
        this.dataHandler();
    },
    beforeUpdate() {
        console.log('getDerivedStateFromProps');
    }
};
</script>
