var express = require("express");
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get("/", (req, res, next) => {
    res.json("Hello");
});

app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});


// For Home page

app.get("/app-static", (req, res, next) => {
    res.json({
        cards: [
            {
                icon: 'fas fa-check-square',
                title: 'Tracker',
                description: 'Keep a record of all the activities you do by using Workout Tracker logging tools',
            },
            {
                icon: 'fas fa-dumbbell',
                title: 'Workout Plans',
                description: 'Explore out bank of exercises and follow workout programs based on your goals'
            },
            {
                icon: 'fas fa-chart-line',
                title: 'Statistics',
                description: 'Use statistics and calendar for keeping track of your workouts and results'
            },
            {
                icon: 'fas fa-utensils',
                title: 'Meal Plans',
                description: 'Choose or create a nutrition plan best suited to your body and daily activities'
            }
        ]
    });
});

// For Category page

app.get("/category-cards", (req, res, next) => {
    res.json(
        [
            {
                img: './images/calisthenics_1.jpg',
                title: 'Calisthenics',
                text: 'Calisthenics is a form of strength training consisting of a variety of movements that exercise large muscle groups, such as running, grasping, pushing, etc. These exercises are often performed rhythmically and with minimal equipment, as bodyweight exercises. They are intended to increase strength and flexibility, through movements such as pulling, pushing, bending, jumping, or swinging.',
                left: true
            },
            {
                img: './images/weight_workout.jpg',
                title: 'Weight Workout',
                text: 'Weight training is a common type of strength training for developing the strength and size of skeletal muscles. It utilizes the force of gravity in the form of weighted bars, dumbbells or weight stacks in order to oppose the force generated by muscle through concentric or eccentric contraction. Weight training uses a variety of specialized equipment to target specific muscle groups.',
                left: false
            },
            {
                img: './images/cardio.jpg',
                title: 'Cardio',
                text: 'Cardiovascular exercise, also known as cardio or aerobic exercise, is essential for good health. It gets your heart rate up, making you blood pump faster. This delivers more oxygen throughout your body, which keeps your heart and lungs healthy.Regular cardio exercise can also help you lose weight, get better sleep, and reduce your risk for chronic disease.',
                left: true
            },
            {
                img: './images/stretching.jpg',
                title: 'Stretching',
                text: 'Stretching is a form of physical exercise in which a specific muscle or tendon is deliberately flexed or stretched in order to improve the muscle\'s felt elasticity and achieve comfortable muscle tone. The result is a feeling of increased muscle control, flexibility, and range of motion. Stretching is also used therapeutically to alleviate cramps and to improve function in daily activities.',
                left: false
            },
        ]
    );
});

// For Calisthenics Programs page

app.get("/cal-programs", (req, res, next) => {
    res.json(
        [
            {
                title: "Program A",
                img: "./images/calisthenics_1.jpg",
                description: "Full Body Outdoor Workout",
                contentList: [
                    "Parallel bar dips",
                    "Shoulder grip pull-ups",
                    "Jump squats",
                    "Inverted row",
                    "Handstand push-ups"
                ],
                level: 'fas fa-battery-full',
                popup: {
                    title: 'Full Body Outdoor Workout',
                    desc: 'The full body outdoor workout, that we will show you in this guide is made for people who are looking to improve their overall shape, instead of just stacking on muscle mass. Total time to complete the program: 45-50 min.',
                    exercises: [
                        { 
                            name: 'Parallel bar dips', 
                            execution: [
                                'Get on the parallel bar',
                                'Keep your legs together and body straight',
                                'Slightly bend elbows and look forward',
                                'Dip down slowly and fully',
                                'Push up explosively, without locking out the elbow'
                            ], 
                            sets: '4',
                            reps: '10-12',
                            img: './images/parallel-bar-dips1.png'
                        },
                        { 
                            name: 'Shoulder grip pull-ups', 
                            execution: [
                                'Grab the bar with your hands at shoulder width',
                                'Pull up slowly, until your chin reaches the bar',
                                'Let your body go all the way down',
                            ], 
                            sets: '3',
                            reps: '10-12',
                            img: './images/shoulder-grip-pull-ups.png'
                        },
                        { 
                            name: 'Jump squats', 
                            execution: [
                                'Stand up straight, place your legs at shoulder width',
                                'Place your arms in front of your chest',
                                'Squat down until the upper portion of your legs is parallel to the ground',
                                'Explode on the way up, jumping as high as you possibly can',
                            ], 
                            sets: '3',
                            reps: '12-15',
                            img: './images/jump-squats-outdoor.jpg'
                        },
                        { 
                            name: 'Inverted row', 
                            execution: [
                                'Grab the bar slightly wider than shoulder width and let your feet go forward',
                                'Look up, keeping your body straight',
                                'Pull your body up until the bar is at the lower portion of the chest',
                                'Go down slowly, stretch the back and proceed to the next repetition'
                            ], 
                            sets: '3',
                            reps: '10-12',
                            img: './images/inverted-row.png'
                        },
                        { 
                            name: 'Handstand push-ups', 
                            execution: [
                                'Get into a kneeling position with your hands on the ground',
                                'Place you hands slightly wider than shoulder width',
                                'Push yourself up with your legs and let your heels touch the wall',
                                'Hold the position for as long as possible',
                            ], 
                            sets: '3',
                            reps: '10-12',
                            img: './images/handstand-push-up.png'
                        }
                    ]
                }
            },
            {
                title: "Program B",
                img: "./images/calisthenics_2.jpg",
                description: "Fat Burning Workout",
                contentList: [
                    "Pull-ups",
                    "Close grip chin-ups",
                    "Diamond push-ups",
                    "Pistols",
                    "Leg raises"
                ],
                level: 'fas fa-battery-quarter',
                popup: {
                    title: 'Fat Burning Workout',
                    desc: 'This program aims to strengthen legs and butt',
                    exercises: [
                        { 
                            name: 'Pushups', 
                            instructions: 'Stand in front of... pull your body... Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut error tenetur nobis quam dicta, sed quos, labore neque enim culpa quod corrupti quibusdam magnam illo quas, at deleniti laudantium mollitia.', 
                            sets: '3',
                            reps: '10-15',
                            img: './images/calisthenics_1.jpg'
                        }
                    ]
                }
            },
            {
                title: "Program C",
                img: "./images/calisthenics_3.jpg",
                description: "Lower Body Workout",
                contentList: [
                    "Jump squates",
                    "Pistols",
                    "Lunges",
                    "Hip thrusts",
                    "L-sits"
                ],
                level: 'fas fa-battery-half',
                popup: {
                    title: 'Lower Body Workout',
                    desc: 'This program aims to strenthen full body',
                    exercises: [
                        { 
                            name: 'Pushups', 
                            instructions: 'Stand in front of... pull your body... Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut error tenetur nobis quam dicta, sed quos, labore neque enim culpa quod corrupti quibusdam magnam illo quas, at deleniti laudantium mollitia.', 
                            sets: '3',
                            reps: '10-15',
                            img: './images/calisthenics_1.jpg'
                        }
                    ]
                }
            }
            
        ]
    );
});

app.listen(3030, () => {
    console.log("Server running on port 3030");
});