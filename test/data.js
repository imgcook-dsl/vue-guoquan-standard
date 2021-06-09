module.exports = {
    componentName: 'Page',
    id: 'Block_970952',
    rect: {
        x: 0,
        y: 0,
        width: 171,
        height: 267,
    },
    smart: {},
    props: {
        style: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            height: '267px',
        },
        className: 'box',
    },
    children: [
        {
            componentName: 'Div',
            props: {
                onClick: function handleClick(e) {
                    window.open(this.item.url);
                },
            },
            children: [
                {
                    componentName: 'Div',
                    id: 'Block_843895',
                    rect: {
                        x: 0,
                        y: 0,
                        width: 171,
                        height: 171,
                    },
                    smart: {},
                    props: {
                        style: {
                            display: 'flex',
                            position: 'relative',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            opacity: '1.00',
                            width: '171px',
                            height: '171px',
                        },
                        className: 'bd',
                    },
                    children: [
                        {
                            componentName: 'Image',
                            id: 'Image_7',
                            rect: {
                                x: 0,
                                y: 0,
                                width: 171,
                                height: 171,
                            },
                            smart: {},
                            props: {
                                style: {
                                    position: 'absolute',
                                    top: '0px',
                                    left: '0px',
                                    width: '171px',
                                    height: '171px',
                                    overflow: 'hidden',
                                },
                                src:
                                    'https://img.alicdn.com/tfs/TB1DDx_rQL0gK0jSZFxXXXWHVXa-684-684.png',
                                className: 'layer',
                            },
                        },
                        {
                            componentName: 'Image',
                            id: 'Image_8',
                            rect: {
                                x: 0,
                                y: 0,
                                width: 171,
                                height: 171,
                            },
                            smart: {},
                            props: {
                                style: {
                                    position: 'absolute',
                                    top: '0px',
                                    left: '0px',
                                    opacity: '1.00',
                                    width: '171px',
                                    height: '171px',
                                },
                                src:
                                    'https://img.alicdn.com/tfs/TB10TB_rQL0gK0jSZFxXXXWHVXa-684-684.png',
                                className: 'bg',
                            },
                        },
                        {
                            componentName: 'Div',
                            id: 'Shape_9',
                            rect: {
                                x: 9,
                                y: 9,
                                width: 61,
                                height: 15,
                            },
                            smart: {},
                            props: {
                                style: {
                                    boxSizing: 'border-box',
                                    display: 'flex',
                                    position: 'absolute',
                                    top: '9px',
                                    left: '9px',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    borderRadius: '7.5px',
                                    backgroundColor: 'rgba(0,0,0,0.40)',
                                    paddingRight: '4.5px',
                                    paddingLeft: '5px',
                                    height: '15px',
                                },
                                className: 'wrap',
                            },
                            children: [
                                {
                                    componentName: 'Image',
                                    id: 'Image_11',
                                    rect: {
                                        x: 14,
                                        y: 12,
                                        width: 7,
                                        height: 9,
                                    },
                                    smart: {},
                                    props: {
                                        style: {
                                            opacity: '1.00',
                                            width: '7px',
                                            height: '9px',
                                        },
                                        src:
                                            'https://img.alicdn.com/tfs/TB1UoB9rQL0gK0jSZFAXXcA9pXa-28-36.png',
                                        className: 'riverdinwei',
                                    },
                                },
                                {
                                    componentName: 'Text',
                                    id: 'Text_10_0',
                                    rect: {
                                        x: 23,
                                        y: 11,
                                        width: 42,
                                        height: 11,
                                    },
                                    smart: {},
                                    props: {
                                        style: {
                                            marginLeft: '2px',
                                            width: '42px',
                                            height: '11px',
                                            lineHeight: '11px',
                                            whiteSpace: 'nowrap',
                                            color: '#ffffff',
                                            fontSize: '9px',
                                            fontWeight: 400,
                                        },
                                        text: '距离500m',
                                        className: 'distance',
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    componentName: 'Div',
                    id: 'Shape_5',
                    rect: {
                        x: 0,
                        y: 171,
                        width: 171,
                        height: 57,
                    },
                    smart: {},
                    props: {
                        style: {
                            display: 'flex',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            backgroundColor: '#ffffff',
                            width: '171px',
                            height: '57px',
                        },
                        className: 'main',
                    },
                    children: [
                        {
                            componentName: 'Text',
                            id: 'Text_6_0',
                            rect: {
                                x: 9,
                                y: 182,
                                width: 150,
                                height: 44,
                            },
                            smart: {},
                            props: {
                                style: {
                                    marginTop: '11px',
                                    width: '150px',
                                    height: '44px',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    lineHeight: '22px',
                                    color: '#333333',
                                    fontSize: '15px',
                                    fontWeight: 400,
                                },
                                className: 'title',
                                text: '{{this.item.title}}',
                            },
                        },
                    ],
                },
                {
                    componentName: 'Div',
                    id: 'Shape_0',
                    rect: {
                        x: 0,
                        y: 273,
                        width: 171,
                        height: 39,
                    },
                    smart: {},
                    props: {
                        style: {
                            boxSizing: 'border-box',
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            borderBottomLeftRadius: '6px',
                            borderBottomRightRadius: '6px',
                            backgroundColor: '#ffffff',
                            paddingRight: '8.5px',
                            paddingLeft: '9px',
                            width: '171px',
                            height: '39px',
                            overflow: 'hidden',
                        },
                        className: 'ft',
                    },
                    children: [
                        {
                            componentName: 'Div',
                            id: 'Block_277147',
                            rect: {
                                x: 9,
                                y: 240,
                                width: 66,
                                height: 15,
                            },
                            smart: {},
                            props: {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    height: '15px',
                                },
                                className: 'block',
                            },
                            children: [
                                {
                                    componentName: 'Image',
                                    id: 'Image_1',
                                    rect: {
                                        x: 9,
                                        y: 240,
                                        width: 15,
                                        height: 15,
                                    },
                                    smart: {},
                                    props: {
                                        style: {
                                            width: '15px',
                                            height: '15px',
                                        },
                                        className: 'xianjin',
                                        src: '{{this.item.user.userImage}}',
                                    },
                                },
                                {
                                    componentName: 'Text',
                                    id: 'Text_2_0',
                                    rect: {
                                        x: 27,
                                        y: 240.5,
                                        width: 48,
                                        height: 14,
                                    },
                                    smart: {},
                                    props: {
                                        style: {
                                            marginLeft: '3px',
                                            lineHeight: '14px',
                                            whiteSpace: 'nowrap',
                                            color: '#666666',
                                            fontSize: '12px',
                                            fontWeight: 300,
                                        },
                                        className: 'fashionHome',
                                        text: '{{this.item.user.userName}}',
                                    },
                                },
                            ],
                        },
                        {
                            componentName: 'Div',
                            id: 'Block_725545',
                            rect: {
                                x: 130.5,
                                y: 240,
                                width: 31.5,
                                height: 15,
                            },
                            smart: {},
                            props: {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    height: '15px',
                                },
                                className: 'group',
                            },
                            children: [
                                {
                                    componentName: 'Image',
                                    id: 'Image_4',
                                    rect: {
                                        x: 130.5,
                                        y: 242,
                                        width: 11,
                                        height: 11,
                                    },
                                    smart: {},
                                    props: {
                                        style: {
                                            width: '11px',
                                            height: '11px',
                                        },
                                        src:
                                            'https://img.alicdn.com/tfs/TB1pxuarHj1gK0jSZFuXXcrHpXa-46-44.png',
                                        className: 'favorite',
                                    },
                                },
                                {
                                    componentName: 'Text',
                                    id: 'Text_3_0',
                                    rect: {
                                        x: 144,
                                        y: 241,
                                        width: 18,
                                        height: 13,
                                    },
                                    smart: {},
                                    props: {
                                        style: {
                                            marginLeft: '2.5px',
                                            lineHeight: '13px',
                                            whiteSpace: 'nowrap',
                                            color: '#999999',
                                            fontSize: '11px',
                                            fontWeight: 400,
                                        },
                                        className: 'num',
                                        text: '{{this.item.readCount}}',
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
            loop: [
                {
                    title: '小户型卫浴怎样才能装得高大上？',
                    coverImage:
                        'https://img.alicdn.com/tfs/TB1Txq6o7T2gK0jSZFkXXcIQFXa-684-684.png',
                    readCount: 200,
                    user: {
                        userImage:
                            'https://img.alicdn.com/tfs/TB1DWe6oYj1gK0jSZFOXXc7GpXa-60-60.png',
                        userName: '时尚家居',
                    },
                    url: 'https://www.imgcook.com',
                },
                {
                    title: '拥有超多功能的40平米简约小公寓了解一下',
                    coverImage:
                        'https://img.alicdn.com/tfs/TB1XRQTo7P2gK0jSZPxXXacQpXa-684-648.png',
                    readCount: 500,
                    user: {
                        userImage:
                            'https://img.alicdn.com/tfs/TB1DWe6oYj1gK0jSZFOXXc7GpXa-60-60.png',
                        userName: '花花设计工作',
                    },
                    url: 'https://www.imgcook.com/docs',
                },
            ],
        },
    ],
    fileName: 'index',
    lifeCycles: {
        _constructor: function constructor(props, context) {
            console.log('constructor');
        },
        getDerivedStateFromProps: function getDerivedStateFromProps(
            props,
            state
        ) {
            console.log('getDerivedStateFromProps');
        },
    },
    methods: {
        isReadCountShow: function isReadCountShow(readCount) {
            return readCount > 300;
        },
    },
    state: {
        stateData: 'test',
    },
    dataSource: {
        list: [
            {
                id: 'fetch_example',
                isInit: true,
                type: 'fetch',
                options: {
                    method: 'GET',
                    params: {},
                    uri: 'https://jsonplaceholder.typicode.com/todos/1',
                },
                dataHandler: function dataHandler(data, error) {
                    console.log(data);
                    return data;
                },
            },
        ],
        dataHandler: function dataHandler(dataMap) {
            console.log('dataHandler 11');
            return dataMap;
        },
    },
};
