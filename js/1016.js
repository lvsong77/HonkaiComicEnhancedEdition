(function () {
    let p = new ReaderParam()
    let bookNum = 1016
    p.bookIndex = bookNum
    p.bookTitle = '双子：入侵'
    p.bookDate = '2019-2020'
    p.bookDesc = {
        zh: '故事发生在一座基地，这里白天灯光明媚，夜晚也灯光明媚；每隔一段时日，就有研究员不省人事……逆熵姐妹无意中发现了知名偶像“伏特加女孩”的秘密，就此展开一段跌宕起伏的冒险！',
    }
    p.editorNote = {
        zh: '- 本篇为4.1版本活动《双子：入侵 海渊乐园篇》的前置漫画。'
            + '</br>- 关联内容：3.1版本活动《地下城大冒险》和网页活动《镰刀勇者成名录》。'
            + '</br>- <a href="https://mihoyo.tmall.com/search.htm?keyword=%B5%D8%CF%C2%B3%C7">相关周边</a>'
    }
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = [
        prefix + 'book_cover/1016.jpg',
        'https://uploadstatic.mihoyo.com/contentweb/20191114/2019111412074936496.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/ae5a37b8c8b6635b6f068c09d471bebb_8248911072777294432.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/910ccbeb958e836f19eb9d44078a23de_5484264929558081197.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/0c0e838b3bd6a965530ee4fe2805062f_1670633355381259938.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/9f8b331744fc371a57063306e8ad8b3a_1070322913256225547.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/9e1d0ba6609affb5f1fc5ac448bde418_6094251868884897931.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/98bba8ea253b0d3fd048a83d8ee3682c_974669528238486833.png',
    ]
    p.numChapter = 14
    p.chTitles = [
        '地下城篇01',
        '地下城篇02',
        '地下城篇03',
        '地下城篇：04',
        '末世篇：01',
        '末世篇：02',
        '末世篇：03',
        '末世篇：04',
        '末世篇05',
        '神探篇01',
        '神探篇02',
        '神探篇03',
        '神探篇04',
        '神探篇05',
    ]
    p.chPages = [
        13, 13, 16, 15, 14,
        13, 8, 9, 11, 6,
        7, 7, 6, 9
    ]
    p.hiddenPages = null
    p.bgmVolume = null
    p.bgmInfo = null
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
