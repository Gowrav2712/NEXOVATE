const eventsData = {
    "robo-race": {
        title: "ROBO RACE",
        category: "TECHNICAL",
        prize: "₹30,000",
        description: "An adrenaline-pumping event where participants must build a robot capable of navigating a complex track filled with sharp turns, steep inclines, and challenging obstacles in the shortest time possible.",
        rules: [
            "The robot must fit within the specified dimensions (30cm x 30cm).",
            "Wired or wireless control is allowed.",
            "Maximum voltage should not exceed 12V.",
            "The course must be completed in order; skipping obstacles results in time penalties.",
            "Two trials will be provided; the best time will be considered."
        ],
        coordinators: [
            { name: "Hitesh K M", phone: "8904902088" },
            { name: "Madu Kumar S", phone: "6366994655" }
        ],
        image: "assets/robo_race.png",
        rulebook: "assets/robo race rule book.pdf",
        registrationUrl: "https://snapmeet.co.in/event/robo-race-2067-180/"
    },
    "robo-soccer": {
        title: "ROBO SOCCER",
        category: "TECHNICAL",
        prize: "₹30,000",
        description: "A thrilling battle of strategy and control! Teams face off in a miniature soccer arena where their robots must outmaneuver opponents to score goals within a set time limit.",
        rules: [
            "Robots must be within 30cm x 30cm dimensions.",
            "Matches consist of two halves of 3 minutes each.",
            "Touching the robot during a match is not allowed unless permitted by the referee.",
            "Fair play is mandatory; any damage to the arena or opponent may lead to disqualification."
        ],
        coordinators: [
            { name: "Yashas P", phone: "9901793968" },
            { name: "Ubair", phone: "6360541947" }
        ],
        image: "assets/robo_soccer.png",
        rulebook: "assets/robo Soccer rule book.pdf",
        registrationUrl: "https://snapmeet.co.in/event/robo-soccer-177/"
    },
    "robo-sumo": {
        title: "ROBO SUMO",
        category: "TECHNICAL",
        prize: "₹20,000",
        description: "Traction, torque, and sheer power! Two robots enter the 'Dohyo' (ring), and the goal is simple: push your opponent out of the circle to claim victory.",
        rules: [
            "Weight limit: Max 5kg.",
            "Size limit: 30cm x 30cm (no height limit).",
            "The robot must start moving only after a 5-second delay from the start signal.",
            "No weapons or liquids allowed; only pushing and traction mechanisms."
        ],
        coordinators: [
            { name: "Paramesh H N", phone: "9448176290" },
            { name: "Gowreesh N", phone: "9448176290" }
        ],
        image: "assets/robo_race.png",
        rulebook: "assets/robo sumo rule book.pdf",
        registrationUrl: "https://snapmeet.co.in/event/robo-sumo-178/"
    },
    "line-follower": {
        title: "LINE FOLLOWER",
        category: "TECHNICAL",
        prize: "₹20,000",
        description: "The ultimate test of autonomous navigation. Program your robot to follow a black line on a white background with precision and speed, tackling loops and intersections along the way.",
        rules: [
            "The robot must be fully autonomous.",
            "Width of the line is 2.5cm-3cm.",
            "The robot must not damage the arena.",
            "Fastest completion time wins."
        ],
        coordinators: [
            { name: "Chiranth", phone: "9448176290" }
        ],
        image: "assets/robo_race.png",
        rulebook: "assets/NEXOVATE - Line Follower (1).pdf",
        registrationUrl: "https://snapmeet.co.in/event/line-follower-182/"
    },
    "maze": {
        title: "MAZE SOLVER",
        category: "TECHNICAL",
        prize: "₹20,000",
        description: "A remotely controlled or autonomous vehicle must find its way through a complex, walled maze. Precision and memory are key to reaching the finish line first.",
        rules: [
            "The robot must navigate from start to finish without touching walls excessively.",
            "Autonomous and manual modes are judged separately.",
            "Time limits apply for each run."
        ],
        coordinators: [
            { name: "Manoj", phone: "9035052726" }
        ],
        image: "assets/robo_race.png",
        rulebook: "assets/NEXOVATE - Maze Solver.pdf",
        registrationUrl: "https://snapmeet.co.in/event/maze-solver-181/"
    },
    "brand-rumbling": {
        title: "RAPID BRAND RUMBLING",
        category: "NON-TECHNICAL",
        prize: "₹10,000",
        description: "Teams build a complete brand identity from a given problem statement. They design logos, color palettes, UI/UX and typography, and create engaging advertising content within a limited time. The event tests creativity and presentation skills.",
        rules: [
            "Participants must bring their own laptops with necessary software.",
            "Internet access is permitted for research only.",
            "Submissions must be original work."
        ],
        coordinators: [
            { name: "Kishan S", phone: "8296557523" },
            { name: "Mohammed Faizan", phone: "9035458816" }
        ],
        image: "assets/hackathon.png",
        rulebook: "assets/Rapid brand rumble Rulebook.pdf",
        registrationUrl: "https://snapmeet.co.in/event/rapid-brand-rumble-185/"
    },
    "shark-tank": {
        title: "SHARK TANK",
        category: "NON-TECHNICAL",
        prize: "₹10,000",
        description: "Teams will develop a startup idea, prepare a pitch deck, and present it to the judges. The goal is to stimulate a real-world startup funding environment, where ideas are evaluated based on innovation, scalability and execution.",
        rules: [
            "Pitch deck must be prepared in advance (max 10 slides).",
            "Presentation time: 5 minutes, Q&A: 5 minutes.",
            "Team size: 1-4 members."
        ],
        coordinators: [
            { name: "Saroj", phone: "8873250798" },
            { name: "MN Yoghanandhan", phone: "9390771258" }
        ],
        image: "assets/hackathon.png",
        rulebook: "assets/NEXOVATE - SHARK TANK RULEBOOK.pdf",
        registrationUrl: "https://snapmeet.co.in/event/shark-tank-183/"
    },
    "iq-wars": {
        title: "IQ WARS 2.0",
        category: "NON-TECHNICAL",
        prize: "₹10,000",
        description: "Participants compete in rounds testing logical reasoning, problem-solving, and general knowledge. The event includes quizzes, puzzles, and rapid-fire questions under time constraints. It evaluates analytical thinking and accuracy.",
        rules: [
            "Preliminary round: Written quiz.",
            "Final round: Live buzzers.",
            "Team size: 1-2 members."
        ],
        coordinators: [
            { name: "Kunal M K", phone: "7795687774" },
            { name: "Aishwarya S", phone: "7411260022" }
        ],
        image: "assets/hackathon.png",
        rulebook: "assets/IQ Wars 2.0 - Rulebook.pdf",
        registrationUrl: "https://snapmeet.co.in/event/iq-wars-2o-187/"
    },
    "hydro-blast": {
        title: "HYDRO BLAST",
        category: "NON-TECHNICAL",
        prize: "₹10,000",
        description: "Participants design and launch water-powered rockets aiming for maximum range and target accuracy. The event introduces principles of aerodynamics, propulsion and pressure mechanics.",
        rules: [
            "Rocket body must be made from a PET bottle.",
            "Propulsion is purely water and air pressure.",
            "participants must bring their own launcher."
        ],
        coordinators: [
            { name: "P Harshit Rao", phone: "9933806575" },
            { name: "Sathwik", phone: "9606369472" }
        ],
        image: "assets/robo_race.png",
        rulebook: "assets/Hydro Blast Rulebook.pdf",
        registrationUrl: "https://snapmeet.co.in/event/hydro-blast-184/"
    },
    "hackathon": {
        title: "HACKSPIRIT 6.0",
        category: "HACKATHON",
        prize: "₹60,000",
        description: "HACKSPIRIT 6.0 is an intensive, multi-domain hackathon where student teams develop innovative solutions across cutting-edge fields like Artificial Intelligence, AgriTech, and the Internet of Things. The event challenges participants to submit and prototype original ideas to solve self-chosen problem statements, fostering technical creativity and practical engineering skills.",
        rules: [
            "Team size: 3-4 members.",
            "Development must happen within the 24-hour window.",
            "Code must be pushed to a Git repository.",
            "Final presentation involves a demo."
        ],
        coordinators: [
            { name: "Sonal H", phone: "9591787616" },
            { name: "Ashwin S", phone: "8951728170" }
        ],
        image: "assets/hackathon.png",
        registrationUrl: "https://snapmeet.co.in/event/hackspirit-6-0-186/"
    }
};

// For Node environment (testing) or Browser modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = eventsData;
}

