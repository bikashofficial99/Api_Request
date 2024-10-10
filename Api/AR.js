const requestUrl = 'https://api.github.com/users/bikashofficial99'
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl  )
    xhr.onreadystatechange = function(){
        console.log(xhr.readyState);
        if (xhr.readyState === 4) {
            const data = JSON.parse(this.responseText)
            console.log(data.name)
        }

    }
    xhr.send();   