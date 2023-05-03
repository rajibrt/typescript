type NoobDeveloper = {
    name: string
};

// type JuniorDeveloper = {
//     name: string,
//     expertise: string;
//     experience: number;
// };

type JuniorDeveloper = NoobDeveloper & {
    expertise: string;
    experience: number;
};



type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number;
    level: "Junior" | "Mid" | "Senior";
}

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: 'Moznu Mia',
    expertise: 'Javascript',
    experience: 1,
};

const developer: NextLevelDeveloper = {
    name: 'Next Bhai',
    expertise: 'typescript',
    experience: 2,
    leadershipExperience: 1,
    level: "Mid"
};