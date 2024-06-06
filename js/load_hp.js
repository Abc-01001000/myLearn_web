let loader = document.querySelector('.loader'),
    loader_wrapper = document.querySelector('.loader-wrapper'),
    cmd = `clone https://github.com/Abc-01001000/myLearn_web.git
Cloning into 'myLearn_web'...
remote: Enumerating objects: 173, done.
remote: Counting objects: 100% (72/72), done.
remote: Compressing objects: 100% (39/39), done.
Receiving objects: 100% (173/173), 25.17 MiB | 2.69 MiB/s, done.
remote: Total 173 (delta 37), reused 58 (delta 31), pack-reused 101
Resolving deltas: 100% (68/68), done.
\xa0`;

onload = () => {
    let line = cmd.split('\n'), 
        frag = document.createDocumentFragment(),
        p1 = document.createElement("p"),
        p2 = document.createElement("p");
    p1.textContent = "~";
    p1.setAttribute('style', 'color: aqua; display: inline-block');
    frag.appendChild(p1);
    p2.textContent = "❯";
    p2.setAttribute('style', 'color: green; display: inline-block');
    frag.appendChild(p2);

    loader.style.width = '50%';
    setTimeout(() => {
        loader.style.height = '50%';
    }, 1500);
    setTimeout(() => {
        loader.style.padding = '3%';
    }, 2000);

    setTimeout(() => {
        loader.appendChild(frag);
        let git = document.createElement("p");
        git.textContent = " git ";
        git.setAttribute('style', 'color: yellow; display: inline-block');
        loader.appendChild(git);
    }, 2500);
    setTimeout(() => {
        let p = document.createElement("p"),
            br = document.createElement("br");
        p.textContent = line[0];
        p.setAttribute('style', 'display: inline-block');
        loader.appendChild(p);
        loader.appendChild(br);
    }, 2500);

    for (let i = 1; i < line.length; ++i) {
        setTimeout(() => {
            let p = document.createElement("p"),
                br = document.createElement("br");
            p.textContent = line[i];
            p.setAttribute('style', 'display: inline-block');
            if (i === line.length - 1) {
                p.setAttribute('id', 'loading');
            }
            loader.appendChild(p);
            loader.appendChild(br);
        }, 3000 + i * 200);
    }

    setTimeout(() => {
        let loading = document.getElementById("loading");
        if (loading) {
            setTimeout(() => { loading.textContent = "[>\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0] \xa00%"; }, 200);
            setTimeout(() => { loading.textContent = "[=>\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0] \xa010%"; }, 400);
            setTimeout(() => { loading.textContent = "[==>\xa0\xa0\xa0\xa0\xa0\xa0\xa0] \xa020%"; }, 450);
            setTimeout(() => { loading.textContent = "[===>\xa0\xa0\xa0\xa0\xa0\xa0] \xa030%"; }, 600);
            setTimeout(() => { loading.textContent = "[====>\xa0\xa0\xa0\xa0\xa0] \xa040%"; }, 650);
            setTimeout(() => { loading.textContent = "[=====>\xa0\xa0\xa0\xa0] \xa050%"; }, 700);
            setTimeout(() => { loading.textContent = "[======>\xa0\xa0\xa0] \xa060%"; }, 900);
            setTimeout(() => { loading.textContent = "[=======>\xa0\xa0] \xa070%"; }, 1000);
            setTimeout(() => { loading.textContent = "[========>\xa0] \xa080%"; }, 1500);
            setTimeout(() => { loading.textContent = "[=========>] \xa090%"; }, 1600);
            setTimeout(() => { loading.textContent = "[==========] \xa0100%"; }, 1800);
        }
    }, 5000);

    setTimeout(() => {
        loader.remove();
        loader_wrapper.remove();
    }, 7000);
};
