const propRes = document.getElementById('proj_prop')
const propRes2 = document.getElementById('proj_prop2')


const makeTabProp = (elem, data) => {
    let tab = data.split('\n');
    // console.table(tab)

    let newTab = [];
    for (let t of tab) {
        let item = t.split(' ');
        let newItem = [];
        let notSDlited = true;
        for (let i of item) {
            if (i == '') { continue }

            if (i.indexOf(':') > -1 && notSDlited) {
                newItem.push(i);
                newItem.push('###');
                notSDlited = false;
                continue
            }
            if (i.indexOf('cm') > -1 && notSDlited) {
                newItem.push('###');
                newItem.push(i);
                notSDlited = false;
                continue
            }

            newItem.push(i)
        }

        if (newItem[newItem.length - 1] == '###') {
            newItem[newItem.length - 1] = '@@@'
        }

        newTab.push(newItem);

    }
    console.table(newTab)

    let res = ''

    for (let t of newTab) {
        let heder = t.some(e => e == '@@@');
        let first = true;

        res += '<div>'
        if (heder) { res += '<b>' }

        let item = '';
        for (let i of t) {
            if (i == '@@@') { continue }
            if (i == '###') {
                if (item.indexOf(':') == -1) { item += ':&#160;' } else { item += '&#160;' }

                item += '<b>';
                first = true;
                continue
            }
            if (!first) {
                item += ' ' + i
            } else {
                item += i;
            }
            first = false;
        }
        res += item + '</b></div>'
    }

    elem.innerHTML = res;
}




let d1 = `wysokość całkowita: 118cm 
szerokość całkowita: 80cm 
głębokość całkowita: 80cm 
wysokość siedziska: 46cm 
szerokość siedziska: 50cm 
głębokość siedziska: 68cm 
wysokość do podłokietników: 65cm`;
makeTabProp(propRes, d1)

let d2 = `Wymiary:
wysokość 40cm,
średnica podstawki na świecę 6,5cm
szerokość 28cm
głębokość 11cm`
makeTabProp(propRes2, d2)



let fitTesxOnSash = (item) => {
    let id = item.id;
    let part = document.querySelector('#' + id + ' .major_part');
    let txt = document.querySelector('#' + id + ' .text');

    let h = part.getBoundingClientRect().height;

    txt.style.setProperty('font-size', (h / 13) + 'px');
    // txt.style.setProperty('line-height', (h / 220));
}

setTimeout(() => {

    fitTesxOnSash(document.getElementById('proj_1234'));
}, 100);



{
    let h1 = document.querySelector('h1');
    let hend_text = document.querySelector('.hend_text');
    let title_hendler = document.querySelector('.title_hendler');
    let title = h1.innerHTML.split(' ');

    h1.style.setProperty('animation-name', 'wait_for_load');
    h1.style.setProperty('animation-iteration-count', 'infinite');
    hend_text.style.setProperty('animation-name', 'wait_for_load');
    hend_text.style.setProperty('animation-iteration-count', 'infinite');

    let title2 = hend_text.innerHTML.split(' ');
    hend_text.innerHTML = title2[0];

    if (title.length != 1) {
        let res = title[0];

        res += '<br><b>'
        for (let i = 1; i != title.length; i++) {
            res += ' ' + title[i];
        }
        res += '</b>'
        h1.innerHTML = res;
    } else {
        h1.style.top = '60px';
        title_hendler.style.height = '100px'
    }
}


{
    let h1 = document.querySelector('h1');
    let hend_text = document.querySelector('.hend_text');
    setTimeout(() => {
        h1.style.setProperty('animation-name', 'spread');
        h1.style.setProperty('animation-iteration-count', '1');
        hend_text.style.setProperty('animation-name', 'fade_left');
        hend_text.style.setProperty('animation-iteration-count', '1');
    }, 100);
}