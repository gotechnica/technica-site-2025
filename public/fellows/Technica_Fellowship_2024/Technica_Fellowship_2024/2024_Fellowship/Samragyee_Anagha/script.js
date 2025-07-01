document.getElementById('personality-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const personalityType = document.getElementById('personalities-id').value;
    const result = document.getElementById('result');
    
    const suggestions = {
        "INTJ": {
            "costume": "Professor Severus Snape (Harry Potter Series)",
            "image": "https://www.pngall.com/wp-content/uploads/2016/05/Severus-Snape-Free-Download-PNG.png"
        },
        "INTP": {
            "costume": "Sherlock Holmes (e.g., Robert Downey Jr. version in Sherlock Holmes Series)",
            "image": "https://www.pngall.com/wp-content/uploads/4/Robert-Downey-Jr-Sherlock-Holmes-Transparent-PNG.png"
        },
        "ENTJ": {
            "costume": "Miranda Priestly (The Devil Wears Prada)",
            "image": "https://64.media.tumblr.com/d4a92575c68e08509443a3e7364d505b/tumblr_nj2m37Y2fh1rxkqbso1_1280.png"
        },
        "ENTP": {
            "costume": "Tony Stark (Marvel Cinematic Universe)",
            "image": "https://www.pngall.com/wp-content/uploads/5/Iron-Man-Tony-Stark-PNG-Clipart.png"
        },
        "INFJ": {
            "costume": "Wonder Woman",
            "image": "https://pngimg.com/uploads/wonder_woman/wonder_woman_PNG30.png"
        },
        "INFP": {
            "costume": "Indiana Jones",
            "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8c361645-11b7-4abc-8219-1d7a2882801e/ddt36p6-77e0494b-0fd0-4632-9ea6-0650f7ae5215.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhjMzYxNjQ1LTExYjctNGFiYy04MjE5LTFkN2EyODgyODAxZVwvZGR0MzZwNi03N2UwNDk0Yi0wZmQwLTQ2MzItOWVhNi0wNjUwZjdhZTUyMTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.z38nP5aRhN3no3THwYZ0L96JGgVY0SqEn-GYlvlp5bE"
        },
        "ENFJ": {
            "costume": "Joan of Arc",
            "image": "https://img1.picmix.com/output/stamp/normal/9/6/2/3/2353269_974bf.png"
        },
        "ENFP": {
            "costume": "Peter Pan (Peter Pan)",
            "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/db9ed8c9-b18e-40d7-9b96-eb34d64138e6/df7cpvw-e1420dc6-831e-4e00-a6c9-d5e05bb0513b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RiOWVkOGM5LWIxOGUtNDBkNy05Yjk2LWViMzRkNjQxMzhlNlwvZGY3Y3B2dy1lMTQyMGRjNi04MzFlLTRlMDAtYTZjOS1kNWUwNWJiMDUxM2IucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xeFIhPgIXaI2vdbjdjC0WOsP_xQZRDB50O-KNwpfYo0"
        },
        "ISTJ": {
            "costume": "Hermione Granger (Harry Potter Series)",
            "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/67f5a72e-1a99-47ed-8d40-348004199705/dctsip1-c0bf7620-ac94-4021-a18c-ddf43ba9bce4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY3ZjVhNzJlLTFhOTktNDdlZC04ZDQwLTM0ODAwNDE5OTcwNVwvZGN0c2lwMS1jMGJmNzYyMC1hYzk0LTQwMjEtYTE4Yy1kZGY0M2JhOWJjZTQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.eidtU1FdHl0RYjk92OIMzwGvTl5-a3S5BC8YykjaSD8"
        },
        "ISFJ": {
            "costume": "Samwise Gamgee (The Lord of the Rings Series)",
            "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b8d2b12-21e8-4931-8a6d-fb9ecdd60383/dcjbo2g-10d6f433-10a9-4ca2-9f95-9bf0996efb1a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViOGQyYjEyLTIxZTgtNDkzMS04YTZkLWZiOWVjZGQ2MDM4M1wvZGNqYm8yZy0xMGQ2ZjQzMy0xMGE5LTRjYTItOWY5NS05YmYwOTk2ZWZiMWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JuapOem5YaBhUnuBeOKt5bUJ66cRTNRen8kzgyygry4"
        },
        "ESTJ": {
            "costume": "Capitan America",
            "image": "https://pngimg.com/d/captain_america_PNG37.png"
        },
        "ESFJ": {
            "costume": "Mrs. Doubtfire (Mrs. Doubtfire)",
            "image": "https://picfiles.alphacoders.com/111/111568.png"
        },
        "ISTP": {
            "costume": "James Bond",
            "image": "https://pngimg.com/d/james_bond_PNG24.png"
        },
        "ISFP": {
            "costume": "Belle (Beauty and the Beast)",
            "image": "https://cdn.inspireuplift.com/uploads/images/seller_products/1690539103_Belle5.png"
        },
        "ESTP": {
            "costume": "Jack Sparrow (Pirates of the Caribbean Series)",
            "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1e725ce2-9195-451c-b155-0a1a3e19ee77/d7v2oqn-5ff5f852-aea7-4cae-877e-82f7547c85ef.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFlNzI1Y2UyLTkxOTUtNDUxYy1iMTU1LTBhMWEzZTE5ZWU3N1wvZDd2Mm9xbi01ZmY1Zjg1Mi1hZWE3LTRjYWUtODc3ZS04MmY3NTQ3Yzg1ZWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TaJ97AhK5o95y1HbFNQQHvyIzRCqwQD7IJa9ZRkPWxs"
        },
        "ESFP": {
            "costume": "Ariel (The Little Mermaid)",
            "image": "https://pngimg.com/d/ariel_PNG5.png"
        }
    };
    
    
    const costumeInfo = suggestions[personalityType];
    const costume = costumeInfo.costume
    const image = costumeInfo.image
    result.textContent = `Based on your personality type (${personalityType}), you should dress up as: ${costume} this Halloween!`;
    const existingImage = result.querySelector('img');
    if (existingImage) {
        result.removeChild(existingImage);
    }
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.style.maxWidth = '200px';

    result.appendChild(imgElement);

  });

  