module.exports = {
    componentName: 'Page',
    id: 'a93080e0-f109-11eb-a987-592f3b483a13',
    props: {
        style: {
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            width: '375px',
            height: '813px',
        },
        className: 'page',
    },
    taskId: '8382DEBB-E58D-4508-BFF4-7ED4CD91C229',
    artboardImg:
        'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a497e5f0f10911eb9c486f10336bcc6e.png',
    rect: {
        x: 0,
        y: 0,
        width: 375,
        height: 813,
    },
    pluginVersion: '4.0.15',
    smart: {
        layerProtocol: {
            'custom-layout': {
                type: 'skip',
            },
        },
    },
    name: '生鲜-商品详情备份',
    reference: 'sketch',
    restore_id: '802d8a9b-4698-4964-ae63-286c6880aa34',
    children: [
        {
            componentName: 'Block',
            id: 'b1c2592c-5e32-4586-92fa-4e5d204c5121',
            props: {
                style: {
                    display: 'flex',
                    position: 'relative',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    marginTop: '1px',
                    marginLeft: '-1px',
                    width: '377px',
                },
                className: 'goods-list-1v3',
            },
            rect: {
                x: -1,
                y: 1,
                width: 377,
                height: 568,
            },
            fileName: 'mod_0',
            children: [
                {
                    componentName: 'Div',
                    id: 'e198071a-014f-4c12-9fb0-3469473eb0bf',
                    props: {
                        style: {
                            display: 'flex',
                            position: 'absolute',
                            top: '374px',
                            alignItems: 'flex-start',
                            alignSelf: 'center',
                            flexDirection: 'row',
                            width: '377px',
                            height: '77px',
                            whiteSpace: 'nowrap',
                        },
                        className: 'container-inner',
                    },
                    rect: {
                        x: -1,
                        y: 375,
                        width: 377,
                        height: 77,
                    },
                    children: [
                        {
                            componentName: 'Div',
                            id: '793469c8-bece-46b3-bcfe-f52e81674d23',
                            props: {
                                style: {
                                    display: 'flex',
                                    position: 'relative',
                                    alignItems: 'flex-start',
                                    flexDirection: 'row',
                                    marginTop: '1px',
                                    marginLeft: '1px',
                                },
                                className: 'wrapper',
                            },
                            rect: {
                                x: 0,
                                y: 376,
                                width: 375,
                                height: 49,
                            },
                            children: [
                                {
                                    componentName: 'Div',
                                    id: '76c8979b-ea06-49f7-9bbb-fee4102fdc0a',
                                    props: {
                                        style: {
                                            display: 'flex',
                                            position: 'absolute',
                                            top: '0px',
                                            left: '0px',
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                            backgroundImage:
                                                'linear-gradient(-25deg, #FCA018 0%, #FD4920 100%)',
                                            width: '375px',
                                            height: '49px',
                                            overflow: 'hidden',
                                            fontWeight: 'normal',
                                        },
                                        className: 'origin-price-wrapper',
                                    },
                                    rect: {
                                        x: 0,
                                        y: 376,
                                        width: 375,
                                        height: 49,
                                    },
                                    selfId:
                                        'ABF2CF8A-787E-4985-A190-BAEC809E6646',
                                    children: [
                                        {
                                            componentName: 'Text',
                                            id:
                                                'a93318f2-f109-11eb-a987-592f3b483a13',
                                            props: {
                                                style: {
                                                    marginTop: '-1px',
                                                    marginLeft: '12px',
                                                    lineHeight: '17px',
                                                    color: '#ffffff',
                                                    fontSize: '17px',
                                                },
                                                text: '¥',
                                                lines: 1,
                                                className: 'rmb',
                                            },
                                            rect: {
                                                x: 12,
                                                y: 386,
                                                width: 10,
                                                height: 28,
                                            },
                                            selfId:
                                                '60C635C3-6577-41B7-8C92-72CEF2D896F40',
                                            smart: {
                                                layerProtocol: {
                                                    layout: {
                                                        type: 'layout',
                                                        position: 'left',
                                                    },
                                                    field: {
                                                        type: 'price',
                                                    },
                                                },
                                            },
                                        },
                                        {
                                            componentName: 'Text',
                                            id:
                                                'a93318f1-f109-11eb-a987-592f3b483a13',
                                            props: {
                                                style: {
                                                    marginTop: '-3px',
                                                    marginRight: '14px',
                                                    lineHeight: '23px',
                                                    color: '#ffffff',
                                                    fontSize: '23px',
                                                },
                                                text: '28.80',
                                                lines: 1,
                                                className: 'price',
                                            },
                                            rect: {
                                                x: 22,
                                                y: 385,
                                                width: 58,
                                                height: 28,
                                            },
                                            selfId:
                                                '60C635C3-6577-41B7-8C92-72CEF2D896F41',
                                            smart: {
                                                layerProtocol: {
                                                    layout: {
                                                        type: 'layout',
                                                        position: 'middle',
                                                    },
                                                },
                                            },
                                        },
                                        {
                                            componentName: 'Text',
                                            id:
                                                'a93318f0-f109-11eb-a987-592f3b483a13',
                                            props: {
                                                style: {
                                                    marginTop: '3px',
                                                    textDecoration:
                                                        'line-through',
                                                    lineHeight: '13px',
                                                    color:
                                                        'rgba(255,255,255,0.64)',
                                                    fontFamily: 'PingFang SC',
                                                    fontSize: '13px',
                                                    fontWeight: 500,
                                                },
                                                text: '¥32.80',
                                                lines: 1,
                                                className: 'origin-price',
                                            },
                                            rect: {
                                                x: 94,
                                                y: 393,
                                                width: 43,
                                                height: 18,
                                            },
                                            selfId:
                                                '0A65241E-0369-49A3-823A-BCF262E28D830',
                                            smart: {
                                                layerProtocol: {
                                                    layout: {
                                                        type: 'layout',
                                                        position: 'right',
                                                    },
                                                    field: {
                                                        type: 'price',
                                                    },
                                                },
                                            },
                                        },
                                    ],
                                },
                                {
                                    componentName: 'Div',
                                    id: '33f00e5e-68a4-4d6b-a49d-f194d36be902',
                                    props: {
                                        style: {
                                            display: 'flex',
                                            position: 'relative',
                                            alignItems: 'flex-start',
                                            flexDirection: 'column',
                                            marginTop: '-1px',
                                            marginLeft: '207px',
                                            backgroundSize: 'contain',
                                            backgroundImage:
                                                'url(https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a28113e0f10911ebb69b5394722ae651.png)',
                                            width: '168px',
                                            height: '50px',
                                        },
                                        src:
                                            'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a28113e0f10911ebb69b5394722ae651.png',
                                        className: 'wrapper-inner',
                                    },
                                    rect: {
                                        x: 207,
                                        y: 375,
                                        width: 168,
                                        height: 50,
                                    },
                                    selfId:
                                        '6DC1670D-D50B-4C5B-9DE4-807FA564A626',
                                    children: [
                                        {
                                            componentName: 'Text',
                                            id:
                                                'a932f1e3-f109-11eb-a987-592f3b483a13',
                                            props: {
                                                style: {
                                                    position: 'relative',
                                                    marginTop: '6px',
                                                    marginLeft: '54px',
                                                    maxWidth: '120px',
                                                    height: '25px',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    lineHeight: '25px',
                                                    color: '#fd4b24',
                                                    fontFamily: 'PingFang SC',
                                                    fontSize: '18px',
                                                    fontWeight: 400,
                                                },
                                                text: '火热抢购中',
                                                lines: 1,
                                                className: 'buy',
                                            },
                                            rect: {
                                                x: 261,
                                                y: 381,
                                                width: 90,
                                                height: 25,
                                            },
                                            selfId:
                                                '91B6C09E-5BA3-400C-8BC9-0D52F72BC6A70',
                                            smart: {
                                                layerProtocol: {
                                                    layout: {
                                                        type: 'layout',
                                                        position: 'top',
                                                    },
                                                },
                                            },
                                        },
                                        {
                                            componentName: 'Text',
                                            id:
                                                'a932f1e2-f109-11eb-a987-592f3b483a13',
                                            props: {
                                                style: {
                                                    position: 'relative',
                                                    alignSelf: 'flex-end',
                                                    marginRight: '24px',
                                                    maxWidth: '120px',
                                                    height: '16px',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    lineHeight: '16px',
                                                    color: '#fd4b24',
                                                    fontFamily: 'PingFang SC',
                                                    fontSize: '11px',
                                                    fontWeight: 500,
                                                },
                                                text: '还剩115份',
                                                lines: 1,
                                                className: 'tag',
                                            },
                                            rect: {
                                                x: 302,
                                                y: 406,
                                                width: 49,
                                                height: 16,
                                            },
                                            selfId:
                                                '7DDCD26D-6910-4AFD-8E88-32638090AB610',
                                            smart: {
                                                layerProtocol: {
                                                    layout: {
                                                        type: 'layout',
                                                        position: 'bottom',
                                                    },
                                                },
                                            },
                                        },
                                    ],
                                    smart: {
                                        layerProtocol: {
                                            component: {
                                                type: 'button',
                                            },
                                        },
                                        nodeIdentification: {
                                            baseComponent: ['button'],
                                        },
                                        nodeCustom: {
                                            baseComponent: {
                                                isConfident: true,
                                                label: 'button',
                                                score: 1.157867193222046,
                                                type: 'baseComponent',
                                                meta: {
                                                    threshold: 0.99,
                                                },
                                                rect: {
                                                    x: 207,
                                                    y: 375,
                                                    width: 168,
                                                    height: 50,
                                                },
                                                id:
                                                    '33f00e5e-68a4-4d6b-a49d-f194d36be902',
                                                selfId:
                                                    '6DC1670D-D50B-4C5B-9DE4-807FA564A626',
                                            },
                                        },
                                    },
                                },
                            ],
                            smart: {
                                layerProtocol: {
                                    component: {
                                        type: 'tabbar',
                                    },
                                },
                                nodeIdentification: {
                                    baseComponent: ['tabbar'],
                                },
                                nodeCustom: {
                                    baseComponent: {
                                        isConfident: true,
                                        label: 'tabbar',
                                        score: 0.9964739680290222,
                                        type: 'baseComponent',
                                        meta: {
                                            threshold: 0.99,
                                        },
                                        rect: {
                                            x: 0,
                                            y: 376,
                                            width: 375,
                                            height: 49,
                                        },
                                        id:
                                            '793469c8-bece-46b3-bcfe-f52e81674d23',
                                        selfId: null,
                                    },
                                },
                            },
                        },
                    ],
                },
                {
                    componentName: 'Div',
                    id: '66b6c81d-6511-4be7-b9c2-1173666a1833',
                    props: {
                        style: {
                            display: 'flex',
                            position: 'relative',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            marginLeft: '1px',
                            backgroundColor: '#FFFFFF',
                            width: '375px',
                            height: '375px',
                            overflow: 'hidden',
                        },
                        className: 'body',
                    },
                    rect: {
                        x: 0,
                        y: 1,
                        width: 375,
                        height: 375,
                    },
                    selfId: '450D289A-6B24-4E83-B480-0A84D15A39E0',
                    children: [
                        {
                            componentName: 'Div',
                            id: '8cf324a0-864f-4e42-9d97-149023004e35',
                            props: {
                                style: {
                                    display: 'flex',
                                    position: 'relative',
                                    alignItems: 'flex-start',
                                    flexDirection: 'column',
                                    height: '87px',
                                },
                                className: 'wrapper-1',
                            },
                            rect: {
                                x: 0,
                                y: 1,
                                width: 375,
                                height: 87,
                            },
                            children: [
                                {
                                    componentName: 'Div',
                                    id: '1e8d6664-31b4-450f-94ec-91031b188e81',
                                    props: {
                                        style: {
                                            boxSizing: 'border-box',
                                            display: 'flex',
                                            position: 'relative',
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            backgroundColor:
                                                'rgba(255,255,255,0.00)',
                                            paddingRight: '14px',
                                            paddingLeft: '21px',
                                            width: '375px',
                                            height: '43px',
                                        },
                                        className: 'wrapper-inner-1',
                                    },
                                    rect: {
                                        x: 0,
                                        y: 1,
                                        width: 375,
                                        height: 43,
                                    },
                                    selfId:
                                        '13B206C5-730A-4469-B15D-4DEE0D4689D2',
                                    children: [
                                        {
                                            componentName: 'Text',
                                            id:
                                                'a930cf05-f109-11eb-a987-592f3b483a13',
                                            props: {
                                                style: {
                                                    marginTop: '2px',
                                                    lineHeight: '15px',
                                                    letterSpacing: '0px',
                                                    whiteSpace: 'nowrap',
                                                    color: '#000000',
                                                    fontSize: '15px',
                                                    fontWeight: 'normal',
                                                },
                                                text: '9:41',
                                                lines: 1,
                                                className: 'time',
                                            },
                                            rect: {
                                                x: 21,
                                                y: 14,
                                                width: 28,
                                                height: 19,
                                            },
                                            selfId:
                                                '3D59F573-DB9A-4104-B052-6E114625BFD90',
                                            smart: {
                                                layerProtocol: {
                                                    layout: {
                                                        type: 'layout',
                                                        position: 'left',
                                                    },
                                                },
                                            },
                                        },
                                        {
                                            componentName: 'Div',
                                            id:
                                                'e7c2aa03-23b5-447b-83c2-b8437943374f',
                                            props: {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    flexDirection: 'row',
                                                    justifyContent: 'center',
                                                    marginTop: '2px',
                                                },
                                                className: 'group',
                                            },
                                            rect: {
                                                x: 294,
                                                y: 18,
                                                width: 67,
                                                height: 11,
                                            },
                                            children: [
                                                {
                                                    componentName: 'Image',
                                                    id:
                                                        'a930cf06-f109-11eb-a987-592f3b483a13',
                                                    props: {
                                                        style: {
                                                            marginRight: '6px',
                                                            width: '37px',
                                                            height: '11px',
                                                        },
                                                        src:
                                                            'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a3e5acf0f10911eb9067a7ea9b9130da.png',
                                                        className: 'icon-hot',
                                                    },
                                                    rect: {
                                                        x: 294,
                                                        y: 18,
                                                        width: 37,
                                                        height: 11,
                                                    },
                                                    selfId:
                                                        'A2135CB2-F790-40D7-BB54-FA1510763A6E',
                                                    smart: {
                                                        layerProtocol: {
                                                            field: {
                                                                type: 'hot',
                                                            },
                                                            layout: {
                                                                type: 'layout',
                                                                position:
                                                                    'left',
                                                            },
                                                        },
                                                        nodeIdentification: {
                                                            fieldBind: ['hot'],
                                                        },
                                                        nodeCustom: {
                                                            fieldBind: {
                                                                confidential: 0.8821532726287842,
                                                                isConfident: true,
                                                                label: 'hot',
                                                                type:
                                                                    'fieldBind',
                                                            },
                                                        },
                                                    },
                                                },
                                                {
                                                    componentName: 'Div',
                                                    id:
                                                        '56f745c5-4883-4e64-b2ff-35e49f78de43',
                                                    props: {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems:
                                                                'center',
                                                            flexDirection:
                                                                'row',
                                                            justifyContent:
                                                                'center',
                                                            marginRight: '1px',
                                                            borderWidth: '1px',
                                                            borderStyle:
                                                                'solid',
                                                            borderRadius:
                                                                '2.66667px',
                                                            borderColor:
                                                                'rgba(0,0,0,0.35)',
                                                            width: '22px',
                                                            height: '11px',
                                                        },
                                                        className: 'view',
                                                    },
                                                    rect: {
                                                        x: 337,
                                                        y: 18,
                                                        width: 22,
                                                        height: 11,
                                                    },
                                                    selfId:
                                                        '8825E029-09A8-4115-B222-19EF8C50D846',
                                                    children: [
                                                        {
                                                            componentName:
                                                                'Div',
                                                            id:
                                                                'a930cf07-f109-11eb-a987-592f3b483a13',
                                                            props: {
                                                                style: {
                                                                    borderRadius:
                                                                        '1.33333px',
                                                                    backgroundColor:
                                                                        '#000000',
                                                                    width:
                                                                        '18px',
                                                                    height:
                                                                        '7px',
                                                                },
                                                                className:
                                                                    'horizontal-line',
                                                            },
                                                            rect: {
                                                                x: 339,
                                                                y: 20,
                                                                width: 18,
                                                                height: 7,
                                                            },
                                                            selfId:
                                                                '8FECE183-AA74-4FB8-BA78-0ABF1FDB9D4B',
                                                        },
                                                    ],
                                                    smart: {
                                                        layerProtocol: {
                                                            layout: {
                                                                type: 'layout',
                                                                position:
                                                                    'middle',
                                                            },
                                                        },
                                                    },
                                                },
                                                {
                                                    componentName: 'Image',
                                                    id:
                                                        'a930cf08-f109-11eb-a987-592f3b483a13',
                                                    props: {
                                                        style: {
                                                            marginTop: '-1px',
                                                            width: '1px',
                                                            height: '4px',
                                                        },
                                                        src:
                                                            'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a3c7ebc0f10911ebb795bf708e735263.png',
                                                        className: 'dot',
                                                    },
                                                    rect: {
                                                        x: 360,
                                                        y: 21,
                                                        width: 1,
                                                        height: 4,
                                                    },
                                                    selfId:
                                                        'E3567F03-D73F-46F0-BFC4-2BE1FB182C3C',
                                                    smart: {
                                                        layerProtocol: {
                                                            field: {
                                                                type: 'play',
                                                            },
                                                            layout: {
                                                                type: 'layout',
                                                                position:
                                                                    'right',
                                                            },
                                                        },
                                                        nodeIdentification: {
                                                            fieldBind: ['play'],
                                                        },
                                                        nodeCustom: {
                                                            fieldBind: {
                                                                confidential: 0.9714350700378418,
                                                                isConfident: true,
                                                                label: 'play',
                                                                type:
                                                                    'fieldBind',
                                                            },
                                                        },
                                                    },
                                                },
                                            ],
                                            smart: {
                                                layerProtocol: {
                                                    layout: {
                                                        type: 'layout',
                                                        position: 'right',
                                                    },
                                                },
                                            },
                                        },
                                    ],
                                    smart: {
                                        layerProtocol: {
                                            layout: {
                                                type: 'layout',
                                                position: 'top',
                                            },
                                        },
                                    },
                                },
                                {
                                    componentName: 'Div',
                                    id: '969a8037-01ca-4044-afde-6b704107a623',
                                    props: {
                                        style: {
                                            display: 'flex',
                                            position: 'relative',
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            marginTop: '5px',
                                            marginLeft: '9px',
                                            width: '351px',
                                        },
                                        className: 'wrapper-inner-2',
                                    },
                                    rect: {
                                        x: 9,
                                        y: 49,
                                        width: 351,
                                        height: 33,
                                    },
                                    children: [
                                        {
                                            componentName: 'Div',
                                            id:
                                                '69a0aaa4-7920-4a11-b75e-4d18d0d5d8a1',
                                            props: {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    flexDirection: 'row',
                                                    justifyContent: 'center',
                                                    marginTop: '2px',
                                                    backgroundSize: 'contain',
                                                    backgroundImage:
                                                        'url(https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a38eda60f10911ebb70d8bcb39f43138.png)',
                                                    width: '29px',
                                                    height: '29px',
                                                },
                                                src:
                                                    'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a38eda60f10911ebb70d8bcb39f43138.png',
                                                className: 'icon-left-wrapper',
                                            },
                                            rect: {
                                                x: 9,
                                                y: 52,
                                                width: 29,
                                                height: 29,
                                            },
                                            selfId:
                                                '527680C0-4718-4142-AB52-756FE7782971',
                                            smart: {
                                                layerProtocol: {
                                                    field: {
                                                        type: 'circle',
                                                    },
                                                    layout: {
                                                        type: 'layout',
                                                        position: 'left',
                                                    },
                                                },
                                                nodeIdentification: {
                                                    fieldBind: ['circle'],
                                                },
                                                nodeCustom: {
                                                    fieldBind: {
                                                        confidential: 0.9998940229415894,
                                                        isConfident: true,
                                                        label: 'circle',
                                                        type: 'fieldBind',
                                                    },
                                                },
                                            },
                                            children: [
                                                {
                                                    componentName: 'Image',
                                                    id:
                                                        'a930f613-f109-11eb-a987-592f3b483a13',
                                                    props: {
                                                        style: {
                                                            width: '8px',
                                                            height: '17px',
                                                        },
                                                        src:
                                                            'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a3abff50f10911eba0402f9550745fcb.png',
                                                        className: 'icon-left',
                                                    },
                                                    rect: {
                                                        x: 18,
                                                        y: 58,
                                                        width: 8,
                                                        height: 17,
                                                    },
                                                    selfId:
                                                        'E6EEF916-8782-4BAE-BB3C-B74E3714890C',
                                                    smart: {
                                                        layerProtocol: {
                                                            field: {
                                                                type: 'left',
                                                            },
                                                        },
                                                        nodeIdentification: {
                                                            fieldBind: ['left'],
                                                        },
                                                        nodeCustom: {
                                                            fieldBind: {
                                                                confidential: 0.9999560117721558,
                                                                isConfident: true,
                                                                label: 'left',
                                                                type:
                                                                    'fieldBind',
                                                            },
                                                        },
                                                    },
                                                },
                                            ],
                                        },
                                        {
                                            componentName: 'Image',
                                            id:
                                                'a93318f4-f109-11eb-a987-592f3b483a13',
                                            props: {
                                                style: {
                                                    width: '88px',
                                                    height: '33px',
                                                },
                                                src:
                                                    'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a25c74e0f10911eba0402f9550745fcb.png',
                                                className: 'badge',
                                            },
                                            rect: {
                                                x: 272,
                                                y: 49,
                                                width: 88,
                                                height: 33,
                                            },
                                            selfId:
                                                'ECA2D639-AD0B-450B-B821-139BDB6995AD',
                                            smart: {
                                                layerProtocol: {
                                                    layout: {
                                                        type: 'layout',
                                                        position: 'right',
                                                    },
                                                },
                                            },
                                        },
                                    ],
                                    smart: {
                                        layerProtocol: {
                                            layout: {
                                                type: 'layout',
                                                position: 'bottom',
                                            },
                                        },
                                    },
                                },
                            ],
                            smart: {
                                layerProtocol: {
                                    layout: {
                                        type: 'layout',
                                        position: 'left',
                                    },
                                },
                            },
                        },
                        {
                            componentName: 'Div',
                            id: '3e64d726-39de-4035-8f84-8a4849ccd2e4',
                            props: {
                                style: {
                                    display: 'flex',
                                    position: 'relative',
                                    alignItems: 'flex-start',
                                    flexDirection: 'column',
                                    marginTop: '1px',
                                    width: '375px',
                                    height: '287px',
                                },
                                className: 'wrapper-2',
                            },
                            rect: {
                                x: 0,
                                y: 89,
                                width: 375,
                                height: 287,
                            },
                            children: [
                                {
                                    componentName: 'Div',
                                    id: 'a930f612-f109-11eb-a987-592f3b483a13',
                                    props: {
                                        style: {
                                            position: 'relative',
                                            marginTop: '-1px',
                                            backgroundColor: '#F3F5F7',
                                            width: '375px',
                                            height: '1px',
                                        },
                                        className: 'horizontal-line-1',
                                    },
                                    rect: {
                                        x: 0,
                                        y: 88,
                                        width: 375,
                                        height: 1,
                                    },
                                    selfId:
                                        '5CDE2B65-D4E8-4D84-8528-EB6C5FA4D395',
                                    smart: {
                                        layerProtocol: {
                                            layout: {
                                                type: 'layout',
                                                position: 'top',
                                            },
                                            component: {
                                                type: 'progressbar',
                                            },
                                        },
                                        nodeIdentification: {
                                            baseComponent: ['progressbar'],
                                        },
                                        nodeCustom: {
                                            baseComponent: {
                                                isConfident: true,
                                                label: 'progressbar',
                                                score: 0.9934821724891663,
                                                type: 'baseComponent',
                                                meta: {
                                                    threshold: 0.99,
                                                },
                                                rect: {
                                                    x: 0,
                                                    y: 88,
                                                    width: 375,
                                                    height: 1,
                                                },
                                                id:
                                                    'a930f612-f109-11eb-a987-592f3b483a13',
                                                selfId:
                                                    '5CDE2B65-D4E8-4D84-8528-EB6C5FA4D395',
                                            },
                                        },
                                    },
                                },
                                {
                                    componentName: 'Image',
                                    id: 'a93318f5-f109-11eb-a987-592f3b483a13',
                                    props: {
                                        style: {
                                            position: 'relative',
                                            alignSelf: 'center',
                                            marginTop: '61px',
                                            width: '40px',
                                            height: '9px',
                                        },
                                        src:
                                            'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a23760b0f10911ebb70d8bcb39f43138.png',
                                        className: 'icon-play',
                                    },
                                    rect: {
                                        x: 168,
                                        y: 150,
                                        width: 40,
                                        height: 9,
                                    },
                                    selfId:
                                        '2526CA5D-D96A-488C-9869-7573142FC1AC',
                                    smart: {
                                        layerProtocol: {
                                            field: {
                                                type: 'play',
                                            },
                                            layout: {
                                                type: 'layout',
                                                position: 'middle',
                                            },
                                        },
                                        nodeIdentification: {
                                            fieldBind: ['play'],
                                        },
                                        nodeCustom: {
                                            fieldBind: {
                                                confidential: 0.9999731779098511,
                                                isConfident: true,
                                                label: 'play',
                                                type: 'fieldBind',
                                            },
                                        },
                                    },
                                },
                                {
                                    componentName: 'Div',
                                    id: '455b6d57-a40a-49e2-a708-3762018d2a86',
                                    props: {
                                        style: {
                                            boxSizing: 'border-box',
                                            display: 'flex',
                                            position: 'relative',
                                            alignItems: 'center',
                                            alignSelf: 'flex-end',
                                            flexDirection: 'row',
                                            marginTop: '177px',
                                            marginRight: '12px',
                                            borderRadius: '11.5px',
                                            backgroundColor: 'rgba(0,0,0,0.27)',
                                            paddingRight: '9px',
                                            paddingLeft: '10px',
                                            height: '23px',
                                            lineHeight: '12px',
                                            whiteSpace: 'nowrap',
                                        },
                                        className: 'tag-wrapper',
                                    },
                                    rect: {
                                        x: 323,
                                        y: 336,
                                        width: 40,
                                        height: 23,
                                    },
                                    selfId:
                                        '0BC0D3F4-5E70-41BC-AD94-D95C3806D87F',
                                    children: [
                                        {
                                            componentName: 'Text',
                                            id:
                                                'a9334000-f109-11eb-a987-592f3b483a13',
                                            props: {
                                                style: {
                                                    color: '#ffffff',
                                                    fontFamily: 'PingFang SC',
                                                    fontSize: '12px',
                                                    fontWeight: 400,
                                                },
                                                text: '2/6',
                                                lines: 1,
                                                className: 'tag-1',
                                            },
                                            rect: {
                                                x: 333,
                                                y: 339,
                                                width: 21,
                                                height: 17,
                                            },
                                            selfId:
                                                '0938FC1A-F32B-4A0C-8215-1D6D2823227E0',
                                        },
                                    ],
                                    smart: {
                                        layerProtocol: {
                                            layout: {
                                                type: 'layout',
                                                position: 'bottom',
                                            },
                                        },
                                    },
                                },
                            ],
                            smart: {
                                layerProtocol: {
                                    layout: {
                                        type: 'layout',
                                        position: 'right',
                                    },
                                },
                            },
                        },
                    ],
                },
                {
                    componentName: 'Div',
                    id: '5f6ec440-9d7f-420f-a53c-d27aa03c85b6',
                    props: {
                        style: {
                            display: 'flex',
                            position: 'relative',
                            alignItems: 'flex-end',
                            flexDirection: 'row',
                            marginTop: '17px',
                            width: '377px',
                            height: '176px',
                        },
                        className: 'footer',
                    },
                    rect: {
                        x: -1,
                        y: 393,
                        width: 377,
                        height: 176,
                    },
                    children: [
                        {
                            componentName: 'Div',
                            id: 'fafc926f-fa26-44c9-9cba-a88bca4705a3',
                            props: {
                                style: {
                                    display: 'flex',
                                    position: 'relative',
                                    alignItems: 'flex-start',
                                    flexDirection: 'column',
                                    marginLeft: '1px',
                                    backgroundColor: '#FFFFFF',
                                    width: '375px',
                                    height: '144px',
                                },
                                className: 'wrapper-3',
                            },
                            rect: {
                                x: 0,
                                y: 425,
                                width: 375,
                                height: 144,
                            },
                            selfId: '58DB8F13-6991-422F-B3F2-C3137F1DD015',
                            children: [
                                {
                                    componentName: 'Image',
                                    id: 'a932f1e0-f109-11eb-a987-592f3b483a13',
                                    props: {
                                        style: {
                                            position: 'relative',
                                            alignSelf: 'flex-end',
                                            marginTop: '16px',
                                            marginRight: '12px',
                                            width: '16px',
                                            height: '16px',
                                        },
                                        src:
                                            'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a2a5b2e0f10911eb9067a7ea9b9130da.png',
                                        className: 'icon-share',
                                    },
                                    rect: {
                                        x: 347,
                                        y: 441,
                                        width: 16,
                                        height: 16,
                                    },
                                    selfId:
                                        '998A43FE-BF92-4937-AA75-2F34296B0B87',
                                    smart: {
                                        layerProtocol: {
                                            field: {
                                                type: 'share',
                                            },
                                            layout: {
                                                type: 'layout',
                                                position: 'top',
                                            },
                                        },
                                        nodeIdentification: {
                                            fieldBind: ['share'],
                                        },
                                        nodeCustom: {
                                            fieldBind: {
                                                confidential: 0.9979683756828308,
                                                isConfident: true,
                                                label: 'share',
                                                type: 'fieldBind',
                                            },
                                        },
                                    },
                                },
                                {
                                    componentName: 'Text',
                                    id: 'a9316b43-f109-11eb-a987-592f3b483a13',
                                    props: {
                                        style: {
                                            position: 'relative',
                                            marginTop: '40px',
                                            marginLeft: '12px',
                                            maxWidth: '351px',
                                            height: '17px',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            lineHeight: '17px',
                                            whiteSpace: 'nowrap',
                                            color: '#808080',
                                            fontFamily: 'PingFang SC',
                                            fontSize: '13px',
                                            fontWeight: 500,
                                        },
                                        text: '新鲜进口直供，甜到你心',
                                        lines: 1,
                                        className: 'info',
                                    },
                                    rect: {
                                        x: 12,
                                        y: 497,
                                        width: 143,
                                        height: 17,
                                    },
                                    selfId:
                                        'FEFBC443-FDA9-4E84-800D-CCBA66F2A1740',
                                    smart: {
                                        layerProtocol: {
                                            layout: {
                                                type: 'layout',
                                                position: 'middle',
                                            },
                                        },
                                    },
                                },
                                {
                                    componentName: 'Div',
                                    id: '7002a625-9848-4d52-8727-34547eecc5e7',
                                    props: {
                                        style: {
                                            display: 'flex',
                                            position: 'relative',
                                            alignItems: 'center',
                                            alignSelf: 'center',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            marginTop: '8px',
                                            borderRadius: '3px',
                                            backgroundColor:
                                                'rgba(245,245,245,0.60)',
                                            width: '351px',
                                            height: '36px',
                                        },
                                        className: 'wrapper-inner-3',
                                    },
                                    rect: {
                                        x: 12,
                                        y: 522,
                                        width: 351,
                                        height: 36,
                                    },
                                    selfId:
                                        '0FBE1FDC-C0F6-46EB-82F4-4CFF2968F103',
                                    children: [
                                        {
                                            componentName: 'Div',
                                            id:
                                                '27ed6169-6444-4579-916a-8c709241bb6c',
                                            props: {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    flexDirection: 'row',
                                                    marginTop: '1px',
                                                    marginRight: '64px',
                                                    height: '17px',
                                                },
                                                className: 'group-i0',
                                            },
                                            rect: {
                                                x: 24,
                                                y: 532,
                                                width: 67,
                                                height: 17,
                                            },
                                            children: [
                                                {
                                                    componentName: 'Image',
                                                    id:
                                                        'a9311d24-f109-11eb-a987-592f3b483a13',
                                                    props: {
                                                        style: {
                                                            marginTop: '1px',
                                                            marginRight: '6px',
                                                            width: '13px',
                                                            height: '12px',
                                                        },
                                                        src:
                                                            'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a32c4800f10911ebae8da7140ed364d7.png',
                                                        className: 'icon-setup',
                                                    },
                                                    rect: {
                                                        x: 24,
                                                        y: 535,
                                                        width: 13,
                                                        height: 12,
                                                    },
                                                    selfId:
                                                        'A4DDE2B8-6E2B-4C7B-B2ED-546B32B3152C',
                                                    smart: {
                                                        layerProtocol: {
                                                            field: {
                                                                type: 'setup',
                                                            },
                                                            layout: {
                                                                type: 'layout',
                                                                position:
                                                                    'left',
                                                            },
                                                        },
                                                        nodeIdentification: {
                                                            fieldBind: [
                                                                'setup',
                                                            ],
                                                        },
                                                        nodeCustom: {
                                                            fieldBind: {
                                                                confidential: 0.38749274611473083,
                                                                isConfident: true,
                                                                label: 'setup',
                                                                type:
                                                                    'fieldBind',
                                                            },
                                                        },
                                                    },
                                                },
                                                {
                                                    componentName: 'Text',
                                                    id:
                                                        'a9311d25-f109-11eb-a987-592f3b483a13',
                                                    props: {
                                                        style: {
                                                            lineHeight: '12px',
                                                            whiteSpace:
                                                                'nowrap',
                                                            color: '#999999',
                                                            fontFamily:
                                                                'PingFang SC',
                                                            fontSize: '12px',
                                                            fontWeight: 400,
                                                        },
                                                        text: '售后无忧',
                                                        lines: 1,
                                                        className: 'label',
                                                    },
                                                    rect: {
                                                        x: 43,
                                                        y: 532,
                                                        width: 48,
                                                        height: 17,
                                                    },
                                                    selfId:
                                                        'DA6C97CF-4E1D-4302-A665-AE18B4A3BA940',
                                                    smart: {
                                                        layerProtocol: {
                                                            layout: {
                                                                type: 'layout',
                                                                position:
                                                                    'right',
                                                            },
                                                        },
                                                    },
                                                },
                                            ],
                                            smart: {
                                                layerProtocol: {
                                                    repeat: {
                                                        type: 'repeat',
                                                        repeatId:
                                                            '1627630943234179',
                                                        repeatIndex: '0',
                                                    },
                                                    layout: {
                                                        type: 'layout',
                                                        position: 'left',
                                                    },
                                                },
                                            },
                                        },
                                        {
                                            componentName: 'Div',
                                            id:
                                                '8bb22874-5551-4e4e-9cee-9ce69511a67c',
                                            props: {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    flexDirection: 'row',
                                                    marginTop: '1px',
                                                    marginRight: '68px',
                                                    height: '17px',
                                                },
                                                className: 'group-i1',
                                            },
                                            rect: {
                                                x: 155,
                                                y: 532,
                                                width: 65,
                                                height: 17,
                                            },
                                            children: [
                                                {
                                                    componentName: 'Image',
                                                    id:
                                                        'a9311d20-f109-11eb-a987-592f3b483a13',
                                                    props: {
                                                        style: {
                                                            marginTop: '-1px',
                                                            marginRight: '5px',
                                                            width: '12px',
                                                            height: '12px',
                                                        },
                                                        src:
                                                            'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a36d2190f10911eba88e319e7697f4dc.png',
                                                        className: 'icon-time',
                                                    },
                                                    rect: {
                                                        x: 155,
                                                        y: 534,
                                                        width: 12,
                                                        height: 12,
                                                    },
                                                    selfId:
                                                        '1FCD7951-9E45-4139-B1AD-4AB566E8BC77',
                                                    smart: {
                                                        layerProtocol: {
                                                            field: {
                                                                type: 'time',
                                                            },
                                                            layout: {
                                                                type: 'layout',
                                                                position:
                                                                    'left',
                                                            },
                                                        },
                                                        nodeIdentification: {
                                                            fieldBind: ['time'],
                                                        },
                                                        nodeCustom: {
                                                            fieldBind: {
                                                                confidential: 0.9998136162757874,
                                                                isConfident: true,
                                                                label: 'time',
                                                                type:
                                                                    'fieldBind',
                                                            },
                                                        },
                                                    },
                                                },
                                                {
                                                    componentName: 'Text',
                                                    id:
                                                        'a9311d21-f109-11eb-a987-592f3b483a13',
                                                    props: {
                                                        style: {
                                                            lineHeight: '12px',
                                                            whiteSpace:
                                                                'nowrap',
                                                            color: '#999999',
                                                            fontFamily:
                                                                'PingFang SC',
                                                            fontSize: '12px',
                                                            fontWeight: 400,
                                                        },
                                                        text: '次日自提',
                                                        lines: 1,
                                                        className: 'word',
                                                    },
                                                    rect: {
                                                        x: 172,
                                                        y: 532,
                                                        width: 48,
                                                        height: 17,
                                                    },
                                                    selfId:
                                                        '707FC21E-3081-446E-8154-66803A8B00AD0',
                                                    smart: {
                                                        layerProtocol: {
                                                            layout: {
                                                                type: 'layout',
                                                                position:
                                                                    'right',
                                                            },
                                                        },
                                                    },
                                                },
                                            ],
                                            smart: {
                                                layerProtocol: {
                                                    repeat: {
                                                        type: 'repeat',
                                                        repeatId:
                                                            '1627630943234179',
                                                        repeatIndex: '1',
                                                    },
                                                    layout: {
                                                        type: 'layout',
                                                        position: 'middle',
                                                    },
                                                },
                                            },
                                        },
                                        {
                                            componentName: 'Div',
                                            id:
                                                '61c08a23-fd46-4808-98bc-1451370b3e10',
                                            props: {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    flexDirection: 'row',
                                                    marginTop: '1px',
                                                    height: '17px',
                                                },
                                                className: 'group-i2',
                                            },
                                            rect: {
                                                x: 288,
                                                y: 532,
                                                width: 63,
                                                height: 17,
                                            },
                                            children: [
                                                {
                                                    componentName: 'Image',
                                                    id:
                                                        'a9311d22-f109-11eb-a987-592f3b483a13',
                                                    props: {
                                                        style: {
                                                            marginTop: '-2px',
                                                            marginRight: '5px',
                                                            width: '10px',
                                                            height: '11px',
                                                        },
                                                        src:
                                                            'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a34acc80f10911ebb7f29fa9d1aedb5e.png',
                                                        className: 'icon-guard',
                                                    },
                                                    rect: {
                                                        x: 288,
                                                        y: 534,
                                                        width: 10,
                                                        height: 11,
                                                    },
                                                    selfId:
                                                        '46E15282-982A-4454-BF2F-3A3F0F994A73',
                                                    smart: {
                                                        layerProtocol: {
                                                            field: {
                                                                type: 'guard',
                                                            },
                                                            layout: {
                                                                type: 'layout',
                                                                position:
                                                                    'left',
                                                            },
                                                        },
                                                        nodeIdentification: {
                                                            fieldBind: [
                                                                'guard',
                                                            ],
                                                        },
                                                        nodeCustom: {
                                                            fieldBind: {
                                                                confidential: 0.9108614921569824,
                                                                isConfident: true,
                                                                label: 'guard',
                                                                type:
                                                                    'fieldBind',
                                                            },
                                                        },
                                                    },
                                                },
                                                {
                                                    componentName: 'Text',
                                                    id:
                                                        'a9311d23-f109-11eb-a987-592f3b483a13',
                                                    props: {
                                                        style: {
                                                            lineHeight: '12px',
                                                            whiteSpace:
                                                                'nowrap',
                                                            color: '#999999',
                                                            fontFamily:
                                                                'PingFang SC',
                                                            fontSize: '12px',
                                                            fontWeight: 400,
                                                        },
                                                        text: '好吃不贵',
                                                        lines: 1,
                                                        className: 'tag-2',
                                                    },
                                                    rect: {
                                                        x: 303,
                                                        y: 532,
                                                        width: 48,
                                                        height: 17,
                                                    },
                                                    selfId:
                                                        '5F0253F0-21FC-43C7-86EF-89495F82079F0',
                                                    smart: {
                                                        layerProtocol: {
                                                            layout: {
                                                                type: 'layout',
                                                                position:
                                                                    'right',
                                                            },
                                                        },
                                                    },
                                                },
                                            ],
                                            smart: {
                                                layerProtocol: {
                                                    repeat: {
                                                        type: 'repeat',
                                                        repeatId:
                                                            '1627630943234179',
                                                        repeatIndex: '2',
                                                    },
                                                    layout: {
                                                        type: 'layout',
                                                        position: 'right',
                                                    },
                                                },
                                            },
                                        },
                                    ],
                                    smart: {
                                        layerProtocol: {
                                            layout: {
                                                type: 'list',
                                                position: 'bottom',
                                                row: 3,
                                                col: 1,
                                            },
                                        },
                                    },
                                },
                            ],
                            smart: {
                                layerProtocol: {
                                    component: {
                                        type: 'slider',
                                    },
                                },
                                nodeIdentification: {
                                    baseComponent: ['slider'],
                                },
                                nodeCustom: {
                                    baseComponent: {
                                        isConfident: true,
                                        label: 'slider',
                                        score: 0.9988227486610413,
                                        type: 'baseComponent',
                                        meta: {
                                            threshold: 0.99,
                                        },
                                        rect: {
                                            x: 0,
                                            y: 425,
                                            width: 375,
                                            height: 144,
                                        },
                                        id:
                                            'fafc926f-fa26-44c9-9cba-a88bca4705a3',
                                        selfId:
                                            '58DB8F13-6991-422F-B3F2-C3137F1DD015',
                                    },
                                },
                            },
                        },
                        {
                            componentName: 'Image',
                            id: 'a9314435-f109-11eb-a987-592f3b483a13',
                            props: {
                                style: {
                                    position: 'absolute',
                                    top: '0px',
                                    left: '0px',
                                    width: '377px',
                                    height: '59px',
                                },
                                src:
                                    'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a2e6da90f10911eba2125bbb5894a3f5.png',
                                className: 'text-background',
                            },
                            rect: {
                                x: -1,
                                y: 393,
                                width: 377,
                                height: 59,
                            },
                            selfId: '04533C39-C8F9-4077-8748-9017D0F04893',
                        },
                        {
                            componentName: 'Div',
                            id: '7c2543b7-5e7e-4e09-a959-f37059ce9bcb',
                            props: {
                                style: {
                                    boxSizing: 'border-box',
                                    display: 'flex',
                                    position: 'absolute',
                                    top: '49px',
                                    left: '13px',
                                    alignItems: 'flex-start',
                                    flexDirection: 'row',
                                    borderRadius: '2px',
                                    backgroundImage:
                                        'linear-gradient(-36deg, #F83600 60%, #F9D423 100%)',
                                    paddingRight: '5px',
                                    paddingLeft: '7px',
                                    height: '15px',
                                    fontWeight: 500,
                                    lineHeight: '14px',
                                    whiteSpace: 'nowrap',
                                },
                                className: 'tag-wrapper-1',
                            },
                            rect: {
                                x: 12,
                                y: 442,
                                width: 32,
                                height: 15,
                            },
                            selfId: '96AD1513-7C83-4E4B-9FC6-A430040A7C58',
                            children: [
                                {
                                    componentName: 'Text',
                                    id: 'a9314430-f109-11eb-a987-592f3b483a13',
                                    props: {
                                        style: {
                                            color: '#ffffff',
                                            fontFamily: 'PingFang SC',
                                            fontSize: '10px',
                                        },
                                        text: '热门',
                                        lines: 1,
                                        className: 'tag-3',
                                    },
                                    rect: {
                                        x: 19,
                                        y: 442,
                                        width: 20,
                                        height: 14,
                                    },
                                    selfId:
                                        '2C3BF5FB-EAAB-4CE1-B96D-39549C7927A00',
                                },
                            ],
                        },
                        {
                            componentName: 'Text',
                            id: 'a9311d27-f109-11eb-a987-592f3b483a13',
                            props: {
                                style: {
                                    WebkitBoxOrient: 'vertical',
                                    display: '-webkit-inline-box',
                                    WebkitLineClamp: 2,
                                    position: 'absolute',
                                    top: '44px',
                                    left: '13px',
                                    width: '304px',
                                    height: '56px',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    lineHeight: '28px',
                                    whiteSpace: 'normal',
                                    color: '#333333',
                                    fontFamily: 'PingFang SC',
                                    fontSize: '19px',
                                    fontWeight: 600,
                                },
                                text:
                                    '      锅圈食汇肥牛卷牛肉卷火锅食材文案  200g/份',
                                lines: 2,
                                className: 'desc',
                            },
                            rect: {
                                x: 12,
                                y: 437,
                                width: 304,
                                height: 56,
                            },
                            selfId: 'EB92F6DA-537A-4F4A-ABBA-20FDC2050B170',
                        },
                    ],
                },
            ],
            smart: {
                layerProtocol: {
                    module: {
                        type: 'goods',
                        params: {
                            functions: [
                                'tabbar',
                                'button',
                                'progressbar',
                                'slider',
                            ],
                            semantics: [
                                'price',
                                'price',
                                'hot',
                                'play',
                                'circle',
                                'left',
                                'play',
                                'share',
                            ],
                            layout: {
                                type: 'list-1v3',
                                params: {
                                    functions: [],
                                    semantics: ['guard'],
                                },
                            },
                        },
                        name: 'goods-list-1v3',
                    },
                },
            },
        },
        {
            componentName: 'Block',
            id: 'a64b1131-1f9f-448e-8ae9-402b98ed6062',
            props: {
                style: {
                    display: 'flex',
                    position: 'relative',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    marginTop: '12px',
                    backgroundColor: '#FFFFFF',
                    width: '375px',
                    height: '86px',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                },
                className: 'shop',
            },
            rect: {
                x: 0,
                y: 581,
                width: 375,
                height: 86,
            },
            selfId: '3F894F86-61FC-4588-A99C-5F2BB03B55E0',
            fileName: 'mod_1',
            children: [
                {
                    componentName: 'Text',
                    id: 'a9316b40-f109-11eb-a987-592f3b483a13',
                    props: {
                        style: {
                            position: 'absolute',
                            top: '15px',
                            left: '12px',
                            lineHeight: '17px',
                            color: '#333333',
                            fontFamily: 'PingFang SC',
                            fontSize: '13px',
                        },
                        text: '已选',
                        lines: 1,
                        className: 'label-1',
                    },
                    rect: {
                        x: 12,
                        y: 596,
                        width: 26,
                        height: 17,
                    },
                    selfId: '4B101781-05C7-4F9F-8882-5A242F8DF2550',
                },
                {
                    componentName: 'Text',
                    id: 'a9314437-f109-11eb-a987-592f3b483a13',
                    props: {
                        style: {
                            position: 'absolute',
                            top: '15px',
                            left: '64px',
                            lineHeight: '17px',
                            color: '#808080',
                            fontFamily: 'PingFang SC',
                            fontSize: '13px',
                        },
                        text: '200g/份',
                        lines: 1,
                        className: 'word-1',
                    },
                    rect: {
                        x: 64,
                        y: 596,
                        width: 51,
                        height: 17,
                    },
                    selfId: '691AB600-53C5-4D28-BB8D-E77F7B60E4810',
                },
                {
                    componentName: 'Image',
                    id: 'a9314434-f109-11eb-a987-592f3b483a13',
                    props: {
                        style: {
                            position: 'absolute',
                            top: '20px',
                            alignSelf: 'center',
                            width: '375px',
                            height: '35px',
                            fontWeight: 400,
                            whiteSpace: 'normal',
                        },
                        src:
                            'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a3018e80f10911eb9c486f10336bcc6e.png',
                        className: 'text-background-1',
                    },
                    rect: {
                        x: 0,
                        y: 601,
                        width: 375,
                        height: 35,
                    },
                    selfId: 'B1A2E3D6-DBD2-4540-B2E7-32653F635B8C',
                },
                {
                    componentName: 'Div',
                    id: '939ddd85-b313-46a7-b4fd-93e2c3e0df65',
                    props: {
                        style: {
                            display: 'flex',
                            position: 'relative',
                            alignItems: 'center',
                            flexDirection: 'row',
                            marginTop: '18px',
                            width: '375px',
                            height: '37px',
                            fontWeight: 400,
                            whiteSpace: 'normal',
                        },
                        className: 'body-1',
                    },
                    rect: {
                        x: 0,
                        y: 599,
                        width: 375,
                        height: 37,
                    },
                    children: [
                        {
                            componentName: 'Image',
                            id: 'a9316b41-f109-11eb-a987-592f3b483a13',
                            props: {
                                style: {
                                    position: 'absolute',
                                    top: '0px',
                                    right: '12px',
                                    width: '11px',
                                    height: '11px',
                                },
                                src:
                                    'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a2c71d90f10911eb9fe7dd28a805e12c.png',
                                className: 'icon-right',
                            },
                            rect: {
                                x: 352,
                                y: 599,
                                width: 11,
                                height: 11,
                            },
                            selfId: 'FD355FE0-5F25-43C0-A1D5-73CE66A4FC8F',
                            smart: {
                                layerProtocol: {
                                    field: {
                                        type: 'right',
                                    },
                                },
                                nodeIdentification: {
                                    fieldBind: ['right'],
                                },
                                nodeCustom: {
                                    fieldBind: {
                                        confidential: 0.9921174645423889,
                                        isConfident: true,
                                        label: 'right',
                                        type: 'fieldBind',
                                    },
                                },
                            },
                        },
                    ],
                },
                {
                    componentName: 'Div',
                    id: '972e18e8-db89-4486-91b1-0a450de5c661',
                    props: {
                        style: {
                            display: 'flex',
                            position: 'relative',
                            alignItems: 'center',
                            flexDirection: 'row',
                            marginLeft: '12px',
                            height: '17px',
                            lineHeight: '13px',
                        },
                        className: 'footer-1',
                    },
                    rect: {
                        x: 12,
                        y: 636,
                        width: 202,
                        height: 17,
                    },
                    children: [
                        {
                            componentName: 'Text',
                            id: 'a9314438-f109-11eb-a987-592f3b483a13',
                            props: {
                                style: {
                                    marginRight: '13px',
                                    color: '#333333',
                                    fontFamily: 'PingFang SC',
                                    fontSize: '13px',
                                },
                                text: '自提点',
                                lines: 1,
                                className: 'tag-4',
                            },
                            rect: {
                                x: 12,
                                y: 636,
                                width: 39,
                                height: 17,
                            },
                            selfId: '57177E81-7A5A-4710-8712-45068E191BB30',
                            smart: {
                                layerProtocol: {
                                    layout: {
                                        type: 'layout',
                                        position: 'left',
                                    },
                                },
                            },
                        },
                        {
                            componentName: 'Text',
                            id: 'a9314436-f109-11eb-a987-592f3b483a13',
                            props: {
                                style: {
                                    color: '#808080',
                                    fontFamily: 'PingFang SC',
                                    fontSize: '13px',
                                },
                                text: '申长路店，次日16:00自提',
                                lines: 1,
                                className: 'shop-title',
                            },
                            rect: {
                                x: 64,
                                y: 636,
                                width: 150,
                                height: 17,
                            },
                            selfId: 'F6443156-57FC-4D3B-9FF6-20A11D9C27430',
                            smart: {
                                layerProtocol: {
                                    layout: {
                                        type: 'layout',
                                        position: 'right',
                                    },
                                    field: {
                                        type: 'shop',
                                    },
                                },
                            },
                        },
                    ],
                },
            ],
            smart: {
                layerProtocol: {
                    module: {
                        type: 'shop',
                        params: {
                            functions: [],
                            semantics: ['right', 'shop'],
                        },
                        name: 'shop',
                    },
                },
            },
        },
        {
            componentName: 'Block',
            id: '0f8c2cfd-ccb1-4414-b6c8-76077332baeb',
            props: {
                style: {
                    display: 'flex',
                    position: 'relative',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    marginTop: '12px',
                    backgroundColor: '#FFFFFF',
                },
                className: 'list',
            },
            rect: {
                x: 0,
                y: 679,
                width: 375,
                height: 135,
            },
            selfId: '3D540F91-4498-4506-B279-0E0EEB4C0C92',
            fileName: 'mod_2',
            children: [
                {
                    componentName: 'Div',
                    id: '26f72eb7-1236-4836-9c2a-af46db6fb311',
                    props: {
                        style: {
                            display: 'flex',
                            position: 'relative',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                            height: '51px',
                            lineHeight: '20px',
                            whiteSpace: 'nowrap',
                        },
                        className: 'header',
                    },
                    rect: {
                        x: 0,
                        y: 679,
                        width: 375,
                        height: 51,
                    },
                    children: [
                        {
                            componentName: 'Text',
                            id: 'a9314432-f109-11eb-a987-592f3b483a13',
                            props: {
                                style: {
                                    position: 'relative',
                                    marginTop: '15px',
                                    marginLeft: '12px',
                                    maxWidth: '351px',
                                    height: '20px',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    color: '#333333',
                                    fontFamily: 'PingFang SC',
                                    fontSize: '16px',
                                    fontWeight: 400,
                                },
                                text: '您的邻居还看了',
                                lines: 1,
                                className: 'meta',
                            },
                            rect: {
                                x: 12,
                                y: 694,
                                width: 112,
                                height: 20,
                            },
                            selfId: 'EF09F846-D3D1-485E-9117-93A5FEB4B69A0',
                        },
                    ],
                },
                {
                    componentName: 'Div',
                    id: '6e1eb384-cd26-4e0a-a57a-57a56cb64d08',
                    props: {
                        style: {
                            display: 'flex',
                            position: 'relative',
                            alignItems: 'center',
                            flexDirection: 'column',
                            marginTop: '1px',
                        },
                        className: 'body-2',
                    },
                    rect: {
                        x: 0,
                        y: 731,
                        width: 375,
                        height: 83,
                    },
                    children: [
                        {
                            componentName: 'Image',
                            id: 'a930a7f0-f109-11eb-a987-592f3b483a13',
                            props: {
                                style: {
                                    position: 'relative',
                                    marginTop: '-1px',
                                    width: '375px',
                                    height: '1px',
                                },
                                src:
                                    'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a41f5a90f10911eba2125bbb5894a3f5.png',
                                className: 'bg',
                            },
                            rect: {
                                x: 0,
                                y: 730,
                                width: 375,
                                height: 1,
                            },
                            selfId: '985E4389-C9E2-4565-930C-74EADE1D63A0',
                            smart: {
                                layerProtocol: {
                                    layout: {
                                        type: 'layout',
                                        position: 'top',
                                    },
                                    component: {
                                        type: 'progressbar',
                                    },
                                },
                                nodeIdentification: {
                                    baseComponent: ['progressbar'],
                                },
                                nodeCustom: {
                                    baseComponent: {
                                        isConfident: true,
                                        label: 'progressbar',
                                        score: 0.9990392923355103,
                                        type: 'baseComponent',
                                        meta: {
                                            threshold: 0.99,
                                        },
                                        rect: {
                                            x: 0,
                                            y: 730,
                                            width: 375,
                                            height: 1,
                                        },
                                        id:
                                            'a930a7f0-f109-11eb-a987-592f3b483a13',
                                        selfId:
                                            '985E4389-C9E2-4565-930C-74EADE1D63A0',
                                    },
                                },
                            },
                        },
                        {
                            componentName: 'Div',
                            id: '1f7f4103-675d-4b46-8da5-e1cb7cc63dcc',
                            props: {
                                style: {
                                    display: 'flex',
                                    position: 'relative',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    marginTop: '4px',
                                    lineHeight: '16px',
                                    whiteSpace: 'nowrap',
                                },
                                className: 'wrapper-4',
                            },
                            rect: {
                                x: 11,
                                y: 735,
                                width: 352,
                                height: 41,
                            },
                            children: [
                                {
                                    componentName: 'Div',
                                    id: '55c0bc55-34da-4572-8578-2f583832363f',
                                    props: {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            flexDirection: 'column',
                                            marginTop: '1px',
                                            marginRight: '55px',
                                            lineHeight: 'normal',
                                            whiteSpace: 'normal',
                                        },
                                        className: 'wrapper-inner-4',
                                    },
                                    rect: {
                                        x: 11,
                                        y: 736,
                                        width: 33,
                                        height: 40,
                                    },
                                    children: [
                                        {
                                            componentName: 'Div',
                                            id:
                                                'f900da9d-4e40-46ce-863c-a0beafd16c80',
                                            props: {
                                                style: {
                                                    display: 'flex',
                                                    position: 'relative',
                                                    alignItems: 'flex-start',
                                                    flexDirection: 'row',
                                                    marginLeft: '7px',
                                                    width: '24px',
                                                    height: '22px',
                                                },
                                                className: 'icon-cart-wrapper',
                                            },
                                            rect: {
                                                x: 18,
                                                y: 736,
                                                width: 24,
                                                height: 22,
                                            },
                                            children: [
                                                {
                                                    componentName: 'Image',
                                                    id:
                                                        'a930cf04-f109-11eb-a987-592f3b483a13',
                                                    props: {
                                                        style: {
                                                            position:
                                                                'absolute',
                                                            top: '0px',
                                                            left: '0px',
                                                            width: '24px',
                                                            height: '22px',
                                                        },
                                                        src:
                                                            'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a4040a60f10911eba88e319e7697f4dc.png',
                                                        className: 'icon-cart',
                                                    },
                                                    rect: {
                                                        x: 18,
                                                        y: 736,
                                                        width: 24,
                                                        height: 22,
                                                    },
                                                    selfId:
                                                        'A8E4E11F-552B-4DE4-BD87-F90B72FB53EE',
                                                    smart: {
                                                        layerProtocol: {
                                                            field: {
                                                                type: 'cart',
                                                            },
                                                        },
                                                        nodeIdentification: {
                                                            fieldBind: ['cart'],
                                                        },
                                                        nodeCustom: {
                                                            fieldBind: {
                                                                confidential: 0.9927934408187866,
                                                                isConfident: true,
                                                                label: 'cart',
                                                                type:
                                                                    'fieldBind',
                                                            },
                                                        },
                                                    },
                                                },
                                                {
                                                    componentName: 'Text',
                                                    id:
                                                        'a930cf03-f109-11eb-a987-592f3b483a13',
                                                    props: {
                                                        style: {
                                                            position:
                                                                'relative',
                                                            marginTop: '-1px',
                                                            marginLeft: '15px',
                                                            maxWidth: '20px',
                                                            height: '15px',
                                                            overflow: 'hidden',
                                                            textOverflow:
                                                                'ellipsis',
                                                            lineHeight: '15px',
                                                            whiteSpace:
                                                                'nowrap',
                                                            color: '#ffffff',
                                                            fontFamily:
                                                                'PingFang SC',
                                                            fontSize: '11px',
                                                            fontWeight: 500,
                                                        },
                                                        text: '4',
                                                        lines: 1,
                                                        className: 'num',
                                                    },
                                                    rect: {
                                                        x: 33,
                                                        y: 735,
                                                        width: 7,
                                                        height: 15,
                                                    },
                                                    selfId:
                                                        'C2E2D030-CB5B-46EA-93EA-0EEBAE9D6D4B0',
                                                },
                                            ],
                                            smart: {
                                                layerProtocol: {
                                                    layout: {
                                                        type: 'layout',
                                                        position: 'top',
                                                    },
                                                },
                                            },
                                        },
                                        {
                                            componentName: 'Text',
                                            id:
                                                'a930cf02-f109-11eb-a987-592f3b483a13',
                                            props: {
                                                style: {
                                                    position: 'relative',
                                                    marginTop: '3px',
                                                    lineHeight: '15px',
                                                    whiteSpace: 'nowrap',
                                                    color: '#333333',
                                                    fontFamily: 'PingFang SC',
                                                    fontSize: '11px',
                                                    fontWeight: 400,
                                                },
                                                text: '购物车',
                                                lines: 1,
                                                className: 'buy-1',
                                            },
                                            rect: {
                                                x: 11,
                                                y: 761,
                                                width: 33,
                                                height: 15,
                                            },
                                            selfId:
                                                'D753C847-D9C1-4AB6-93B8-BEC15236FFEA0',
                                            smart: {
                                                layerProtocol: {
                                                    layout: {
                                                        type: 'layout',
                                                        position: 'bottom',
                                                    },
                                                },
                                            },
                                        },
                                    ],
                                    smart: {
                                        layerProtocol: {
                                            layout: {
                                                type: 'layout',
                                                position: 'left',
                                            },
                                        },
                                    },
                                },
                                {
                                    componentName: 'Div',
                                    id: '9913bd19-26b2-4c65-90a5-c06581947d40',
                                    props: {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            marginTop: '-1px',
                                            marginRight: '12px',
                                            borderRadius: '20px',
                                            backgroundColor: '#31CF6E',
                                            width: '126px',
                                            height: '40px',
                                        },
                                        className: 'wrapper-inner-i0',
                                    },
                                    rect: {
                                        x: 99,
                                        y: 735,
                                        width: 126,
                                        height: 40,
                                    },
                                    selfId:
                                        '48F787B9-B0AC-4519-BC3B-BB1AB62F6656',
                                    children: [
                                        {
                                            componentName: 'Text',
                                            id:
                                                'a930a7f2-f109-11eb-a987-592f3b483a13',
                                            props: {
                                                style: {
                                                    maxWidth: '114px',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    color: '#ffffff',
                                                    fontFamily: 'PingFang SC',
                                                    fontSize: '16px',
                                                    fontWeight: 400,
                                                },
                                                text: '加入购物车',
                                                lines: 1,
                                                className: 'buy-2',
                                            },
                                            rect: {
                                                x: 122,
                                                y: 744,
                                                width: 80,
                                                height: 22,
                                            },
                                            selfId:
                                                '973164C9-5941-4A37-9F77-71843768A4470',
                                        },
                                    ],
                                    smart: {
                                        layerProtocol: {
                                            repeat: {
                                                type: 'repeat',
                                                repeatId: '1627630943234809',
                                                repeatIndex: '0',
                                            },
                                            multiStatus: {
                                                type: 'multiStatus',
                                                protocol: {
                                                    autoDetected: true,
                                                    statusId:
                                                        '16276309432475820',
                                                    statusIndex: 0,
                                                    statusCount: 2,
                                                },
                                            },
                                            layout: {
                                                type: 'layout',
                                                position: 'middle',
                                            },
                                        },
                                    },
                                },
                                {
                                    componentName: 'Div',
                                    id: '53d9431d-3305-4fb8-9df1-6233b130189d',
                                    props: {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            marginTop: '-1px',
                                            borderRadius: '20px',
                                            backgroundColor: '#FB4E44',
                                            width: '126px',
                                            height: '40px',
                                        },
                                        className: 'wrapper-inner-i1',
                                    },
                                    rect: {
                                        x: 237,
                                        y: 735,
                                        width: 126,
                                        height: 40,
                                    },
                                    selfId:
                                        '55520513-C559-4FA7-9B29-8F6AA040F557',
                                    children: [
                                        {
                                            componentName: 'Text',
                                            id:
                                                'a930a7f1-f109-11eb-a987-592f3b483a13',
                                            props: {
                                                style: {
                                                    maxWidth: '114px',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    color: '#ffffff',
                                                    fontFamily: 'PingFang SC',
                                                    fontSize: '16px',
                                                    fontWeight: 400,
                                                },
                                                text: '立即购买',
                                                lines: 1,
                                                className: 'buy-3',
                                            },
                                            rect: {
                                                x: 268,
                                                y: 744,
                                                width: 64,
                                                height: 22,
                                            },
                                            selfId:
                                                '414E998B-9108-4029-859C-BD9B8BB96AC20',
                                        },
                                    ],
                                    smart: {
                                        layerProtocol: {
                                            repeat: {
                                                type: 'repeat',
                                                repeatId: '1627630943234809',
                                                repeatIndex: '1',
                                            },
                                            multiStatus: {
                                                type: 'multiStatus',
                                                protocol: {
                                                    autoDetected: true,
                                                    statusId:
                                                        '16276309432475820',
                                                    statusIndex: 1,
                                                    statusCount: 2,
                                                },
                                            },
                                            layout: {
                                                type: 'layout',
                                                position: 'right',
                                            },
                                            component: {
                                                type: 'button',
                                            },
                                        },
                                        nodeIdentification: {
                                            baseComponent: ['button'],
                                        },
                                        nodeCustom: {
                                            baseComponent: {
                                                isConfident: true,
                                                label: 'button',
                                                score: 1.4997151494026184,
                                                type: 'baseComponent',
                                                meta: {
                                                    threshold: 0.99,
                                                },
                                                rect: {
                                                    x: 237,
                                                    y: 735,
                                                    width: 126,
                                                    height: 40,
                                                },
                                                id:
                                                    '53d9431d-3305-4fb8-9df1-6233b130189d',
                                                selfId:
                                                    '55520513-C559-4FA7-9B29-8F6AA040F557',
                                            },
                                        },
                                    },
                                },
                            ],
                            smart: {
                                layerProtocol: {
                                    layout: {
                                        type: 'layout',
                                        position: 'middle',
                                    },
                                },
                            },
                        },
                        {
                            componentName: 'Div',
                            id: '1e4dc5f2-5e29-4cc9-b872-21d7dcea2291',
                            props: {
                                style: {
                                    display: 'flex',
                                    position: 'relative',
                                    alignItems: 'flex-start',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    marginTop: '4px',
                                    backgroundColor: 'rgba(255,255,255,0.00)',
                                    width: '375px',
                                    height: '34px',
                                },
                                className: 'wrapper-5',
                            },
                            rect: {
                                x: 0,
                                y: 780,
                                width: 375,
                                height: 34,
                            },
                            selfId: 'FD665D94-5625-44AB-96B0-699A9CB4B49F',
                            children: [
                                {
                                    componentName: 'Div',
                                    id: 'a93080e1-f109-11eb-a987-592f3b483a13',
                                    props: {
                                        style: {
                                            marginTop: '20px',
                                            borderRadius: '2.5px',
                                            backgroundColor: '#333333',
                                            width: '134px',
                                            height: '5px',
                                        },
                                        className: 'horizontal-line-2',
                                    },
                                    rect: {
                                        x: 121,
                                        y: 800,
                                        width: 134,
                                        height: 5,
                                    },
                                    selfId:
                                        '881F9FE2-A6E0-4A17-874B-40F6C7C66948',
                                    smart: {
                                        layerProtocol: {
                                            component: {
                                                type: 'progressbar',
                                            },
                                        },
                                        nodeIdentification: {
                                            baseComponent: ['progressbar'],
                                        },
                                        nodeCustom: {
                                            baseComponent: {
                                                isConfident: true,
                                                label: 'progressbar',
                                                score: 0.9954087138175964,
                                                type: 'baseComponent',
                                                meta: {
                                                    threshold: 0.99,
                                                },
                                                rect: {
                                                    x: 121,
                                                    y: 800,
                                                    width: 134,
                                                    height: 5,
                                                },
                                                id:
                                                    'a93080e1-f109-11eb-a987-592f3b483a13',
                                                selfId:
                                                    '881F9FE2-A6E0-4A17-874B-40F6C7C66948',
                                            },
                                        },
                                    },
                                },
                            ],
                            smart: {
                                layerProtocol: {
                                    layout: {
                                        type: 'layout',
                                        position: 'bottom',
                                    },
                                },
                            },
                        },
                    ],
                },
            ],
            smart: {
                layerProtocol: {
                    module: {
                        type: 'smartModule',
                        name: 'list',
                    },
                },
            },
        },
    ],
    imgcook: {
        restore_id: '802d8a9b-4698-4964-ae63-286c6880aa34',
    },
};
