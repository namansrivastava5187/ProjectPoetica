const sampledata=[
    {
        "title": "random thought",
        "author": "alex",
        "likes": 6,
        "images" :"https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww",
        "description": "tyzpfxmi"
    },
    {
        "title": "first post",
        "author": "naman",
        "likes": 97,
        "images" : "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww",
        "description": "mdzqlmfr"
    },
    {
        "title": "daily update",
        "author": "taylor",
        "likes": 46,
        "images" : "https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww" ,
        "description": "vdhkbwwd"
    },
    {
        "title": "daily update",
        "author": "alex",
        "likes": 53,
        "images" : "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D" ,
        "description": "qyliadev"
    },
    {
        "title": "daily update",
        "author": "alex",
        "likes": 26,
        "images" : "https://plus.unsplash.com/premium_photo-1675805015392-28fd80c551ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D" ,
        "description": "ifipjfkb"
    },
    {
        "title": "second post",
        "author": "casey",
        "likes": 9,
        "images" :"https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        "description": "mtrwjnoz"
    },
    {
        "title": "random thought",
        "author": "naman",
        "likes": 0,
        "images" : "https://media.istockphoto.com/id/513247652/photo/panoramic-beautiful-view-of-mount-ama-dablam.jpg?s=2048x2048&w=is&k=20&c=UPPXnDKS803pmXDdx6zjQ7nMqe9MZBHbc1KeXeDC0HE=",
        "description": "fwolzzvz"
    },
    {
        "title": "tech talk",
        "author": "naman",
        "likes": 14,
        "images" : "https://media.istockphoto.com/id/1210290609/photo/panorama-of-beautiful-mount-ama-dablam-in-himalayas-nepal.jpg?s=612x612&w=0&k=20&c=bY6SLzB0uYNxujU3fOYSTcm2Y6sSxfg3bxRhwQ2kO2M=",
        "description": "jbwgwgrn"
    },
    {
        "title": "second post",
        "author": "naman",
        "likes": 86,
        "images" : "https://media.istockphoto.com/id/1134242509/photo/young-monkeys-cleaning-eachother.webp?b=1&s=170667a&w=0&k=20&c=zH-eAjyWX1-GygsuHytk6yGUT4JAQkVxG2pxnO2rtbA=",
        "description": "uvsolwmq"
    },
    {
        "title": "daily update",
        "author": "casey",
        "likes": 37,
        "images" :"https://media.istockphoto.com/id/543352694/photo/traditional-wool-dying.webp?b=1&s=170667a&w=0&k=20&c=qIbAtbZrmTiFnPtJGXiYgIa13xRQoMZn0yF68uCbMsI=" ,
        "description": "efbemxud"
    },
    {
        "title": "random thought",
        "author": "naman",
        "likes": 25,
        "images" : "https://media.istockphoto.com/id/1869668434/photo/shikaras-boat-on-dale-lake-in-srinagar-jammu-kashmir-india.webp?b=1&s=170667a&w=0&k=20&c=VYncWvskiEvfERxfCC5MAma55qj6KS8IWxH_VLkcWUo=",
        "description": "cxruzlnu"
    },
    {
        "title": "tech talk",
        "author": "casey",
        "likes": 80,
        "images" : "https://images.unsplash.com/photo-1587245910433-1b9150f9ae03?dpr=1&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MzMzMDQ0OHx8ZW58MHx8fHx8",
        "description": "hydbhqne"
    },
    {
        "title": "random thought",
        "author": "taylor",
        "likes": 70,
        "images" : "https://images.unsplash.com/photo-1678769479329-2dd2adbd47d6?dpr=1&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTMwMTQwOHx8ZW58MHx8fHx8",
        "description": "rpvhqzns"
    },
    {
        "title": "first post",
        "author": "alex",
        "likes": 40,
        "images" :"https://images.unsplash.com/photo-1673970825861-3469f8fe01d3?dpr=1&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MjE3MDY5MHx8ZW58MHx8fHx8" ,
        "description": "dnllibwy"
    },
    {
        "title": "random thought",
        "author": "alex",
        "likes": 44,
        "images" :"https://images.unsplash.com/photo-1506087031906-0e11fcddc6a4?dpr=1&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MjQ4NDcyMnx8ZW58MHx8fHx8" ,
        "description": "biosclso"
    }
];

module.exports = {data :sampledata};