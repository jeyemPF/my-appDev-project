const PEOPLE = {
    // Organizers
    JELINE_MENDEZ: {
        name: 'Jeline Mendez',
        description: "Hello, I'm Jeline Mendez – a meticulous planner, deadline virtuoso, and effective communicator. I specialize in transforming visions into seamless realities. With my flair for creative problem-solving and adaptive leadership, I ensure your events are not just organized but truly extraordinary. Elevate your projects with my resourceful, budget-savvy approach and positive energy. Contact me now for unparalleled organizational excellence!",
        position: 'Organizer',
        image: require('../assets/img/people/jeline-mendez.jpg'),
        ratings: 3,
        status: 'Active Now',
        customers: '58 customers',
        email: 'jeline.mendez@example.com · Event Express',
        event: {
            name: 'Championship',
            description: "Experience the thrill of competition with our Championship event. Our event organizer app ensures you never miss a moment, providing real-time updates, schedules, and exclusive content, making your experience truly unforgettable.",
            image: require('../assets/img/hEvents/championship.jpg')
        },
        
    },
    // Additional People
    JOHN_DOE: {
        name: 'John Doe',
        description: "Greetings! I'm John Doe, an experienced coordinator with a passion for precision. Let me turn your ideas into impeccably executed events. My keen attention to detail and knack for smooth execution guarantee success. Contact me for seamless event planning!",
        position: 'Event Coo', // Limited to 9 characters
        image: require('../assets/img/people/john-doe.jpg'),
        ratings: 2.5,
        status: 'Active 10m ago',
        customers: '23 customers',
        email: 'john.doe@example.com · Event Express',
        event: {
            name: 'Music Fest',
            description: "Immerse yourself in the rhythmic beats and harmonious melodies of our Music Fest. With our event organizer app, discover the lineup, set times, and interactive maps. Capture the vibrant atmosphere and share your favorite moments seamlessly, making this festival an unforgettable experience.",
            image: require('../assets/img/hEvents/musicfest.jpg'),
        },
    },
    ALICE_SMITH: {
        name: 'Alice Smith',
        description: "Hey there! I'm Alice Smith, your go-to organizer for creative solutions. Whether it's events or projects, I bring a touch of innovation to everything I do. Let's work together to make your ideas shine. Reach out for a collaboration filled with fresh ideas and flawless execution!",
        position: 'CreativOrg', // Limited to 9 characters
        image: require('../assets/img/people/alice-smith.jpg'),
        ratings: 5,
        status: 'active',
        customers: '102 customers',
        email: 'alice.smith@example.com · Event Express',
        event: {
            name: 'Sinulog Festival',
            description: "Immerse yourself in the vibrant Sinulog Festival, seamlessly organized through our event app. From interactive maps to live-streamed performances, our app enhances your festival journey, ensuring you make the most of every celebration.",
            image: require('../assets/img/hEvents/sinulog.webp'),
        },
    
        
    },
    MIKE_JENSON: {
        name: 'Mike Jenson',
        description: "Hi, I'm Mike Jenson, a seasoned project manager. I thrive on turning challenges into triumphs. With a strategic mindset and effective communication, I ensure your projects meet and exceed expectations. Let's achieve excellence together!",
        position: 'ProjMana', // Limited to 9 characters
        image: require('../assets/img/people/mike-jenson.jpg'),
        ratings: 2,
        status: 'Active 5m ago',
        customers: '90 customers',
        email: 'mike.jenson@example.com · Event Express',
        event: {
            name: 'Anniversary',
            description: "Celebrate love effortlessly with our event organizer app at the Anniversary event. Plan your special day, manage guest lists, and capture precious moments. Let our app handle the details, so you can focus on creating lasting memories.",
            image: require('../assets/img/hEvents/wedding.jpeg'),
        },
    
    },
    LISA_ROBERTS: {
        name: 'Lisa Roberts',
        description: "Greetings, I'm Lisa Roberts! As a skilled communicator and organizer, I bring a fresh perspective to your events. My dedication to flawless execution and collaborative planning ensures success. Let's make your projects unforgettable!",
        position: 'CommSpec', // Limited to 9 characters
        image: require('../assets/img/people/lisa-roberts.jpg'),
        ratings: 1.9,
        status: 'Active 10m ago',
        customers: '48 customers',
        email: 'lisa.roberts@example.com · Event Express',
        event: {
            name: 'Motocross',
            description: "Rev up your excitement with our Motocross event, seamlessly organized with our event app. Stay in the know with live race updates, track maps, and behind-the-scenes content, ensuring an adrenaline-packed experience at your fingertips.",
            image: require('../assets/img/hEvents/motocross.jpg'),
        },
    
    },
    RYAN_WILLIAMS: {
        name: 'Ryan Williams',
        description: "Hello, I'm Ryan Williams, your event maestro. With a passion for seamless execution and creative flair, I turn concepts into reality. Let's create memorable experiences together. Contact me for event excellence!",
        position: 'Event M', // Limited to 9 characters
        image: require('../assets/img/people/ryan-williams.jpg'),
        status: 'Active 2m ago',
        ratings: 2,
        customers: '18 customers',
        email: 'ryan.williams@example.com · Event Express',
        event: {

                name: 'Filmathon',
                description: "Dive into the enchanting world of cinema with our Filmathon event. Immerse yourself in a cinematic journey filled with captivating films, talented artists, and exclusive behind-the-scenes content. Our event organizer app provides access to film schedules, artist profiles, and interactive features, enhancing your movie-watching experience. Join us for a celebration of storytelling and creativity at Filmathon!",            
                image: require("../assets/img/hEvents/movie.jpg")
            },
            
    },
    EMMA_TAYLOR: {
        name: 'Emma Taylor',
        description: "Hi, I'm Emma Taylor – your detail-driven event planner. I specialize in crafting experiences that leave a lasting impression. From concept to execution, I ensure every detail is perfect. Reach out for meticulously organized events!",
        position: 'Event Pla', // Limited to 9 characters
        image: require('../assets/img/people/emma-taylor.jpg'),
        ratings: 5,
        status: 'Active 8m ago',
        customers: '31 customers',
        email: 'emma.taylor@example.com · Event Express',
        event: {
            name: 'ProfDev',
        description: "Elevate your professional journey with the ProfDev event, organized seamlessly through our event app. Connect with industry experts, access session schedules, and enhance your networking experience, all in one place.",
        image: require('../assets/img/hEvents/profDev.jpg'),
    },
    
    },
    JASON_HARRIS: {
        name: 'Jason Harris',
        description: "Greetings! I'm Jason Harris, your strategic event organizer. With a focus on effective planning and execution, I bring order to chaos. Let's work together to make your events a resounding success. Contact me for strategic event solutions!",
        position: 'StratOrg', // Limited to 9 characters
        image: require('../assets/img/people/jason-harris.jpg'),
        ratings: 3,
        status: 'Active now',
        customers: '68 customers',
        email: 'jason.harris@example.com · Event Express',
        event: {
            name: 'Kids Party',
            description: "Bring joy to little ones with our Kids Party event, made hassle-free by our event organizer app. Plan games, manage RSVPs, and capture delightful moments effortlessly, ensuring a magical experience for both kids and parents.",
            image: require('../assets/img/hEvents/kids.jpg'),
        },
    
    },
    OLIVIA_BAKER: {
        name: 'Olivia Baker',
        description: "Hello, I'm Olivia Baker, an organizer with a passion for creativity. I infuse every project with innovation and attention to detail. Let's collaborate to make your ideas come to life. Contact me for creative event solutions!",
        position: 'CreatOrg', 
        image: require('../assets/img/people/olivia-baker.jpg'),
        ratings: 1,
        status: 'Active 25m ago',
        customers: '110 customers',
        email: 'olivia.baker@example.com · Event Express',
        event: {
         
                name: 'Technology Expo',
                description: "Embark on a journey into the future with our Technology Expo. Explore cutting-edge innovations, connect with industry leaders, and experience hands-on demonstrations of the latest technologies. Our event organizer app provides real-time updates, exhibition maps, and exclusive content, ensuring you make the most of this tech-filled adventure. Join us at the forefront of innovation and discovery!",
                image: require('../assets/img/hEvents/techno.jpg'),

        },
    
    },
    MARK_ANDERSON: {
        name: 'Mark Anderson',
        description: "Hey there! I'm Mark Anderson, your reliable event coordinator. With a focus on organization and precision, I ensure your events run seamlessly. Let's create successful events together. Contact me for reliable event coordination!",
        position: 'ReliCoord', // Limited to 9 characters
        image: require('../assets/img/people/mark-anderson.jpg'),
        ratings: 4.2,
        status: 'Active 20m ago',
        customers: '55 customers',
        email: 'mark.anderson@example.com · Event Express',
        event: {
            name: 'Job Fair',
            description: "Explore new career opportunities and connect with potential employers at our Job Fair. Whether you're a seasoned professional or a recent graduate, our event provides a platform to network with leading companies, attend career development sessions, and submit your resume. Utilize our event organizer app to access company profiles, job listings, and real-time updates. Elevate your career at the Job Fair and take the next step towards professional success!",
            image: require('../assets/img/hEvents/job.jpg'),
        },
        
    },
  
};

export default PEOPLE;
