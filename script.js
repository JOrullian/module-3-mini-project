let numberOfMatches = 0

window.alert(`Welcome to ROCK, PAPER, SCISSORS, LIZARD, SPOCK.`);
console.log(`Here are the rules:`);
console.log(`SCISSORS cut PAPER`);
console.log(`PAPER covers ROCK`);
console.log(`ROCK crushes LIZARD`);
console.log(`LIZARD poisons SPOCK`);
console.log(`SPOCK smashes SCISSORS`);
console.log(`SCISSORS decapitates LIZARD`);
console.log(`LIZARD eats PAPER`);
console.log(`PAPER disproves SPOCK`);
console.log(`SPOCK vaporizes ROCK`);
console.log(`And, as it always has, ROCK crushes SCISSORS.`);

const playGame = function() {

    let stats = {
        wins: 0,
        ties: 0,
        losses: 0,
        count: {
            rock: 0,
            paper: 0,
            scissors: 0,
            lizard: 0,
            spock: 0,
        }
    };

    const choices = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];

    let keepPlaying = true;

    while (keepPlaying) {

        let userChoice = window.prompt(`Do you choose ROCK, PAPER, SCISSORS, LIZARD or SPOCK?`);

        if (!userChoice)    {
            return;
        }

        userChoice = userChoice.toUpperCase()

        if (!choices.includes(userChoice))  {
            window.alert(`Please enter a valid choide.`)
        }   else    {

            if (userChoice === "ROCK")  {
                stats.count.rock++;
            }   else if (userChoice === "PAPER")    {
                stats.count.paper++;
            }   else if (userChoice === "SCISSORS") {
                stats.count.scissors++;
            }   else if (userChoice === "LIZARD")   {
                stats.count.lizard++;
            }   else    {
                stats.count.spock++;
            }
        }

        let computerChoice = choices[Math.floor(Math.random() * choices.length)];
        window.alert(`Computer chose ${computerChoice}.`);

        if (userChoice === computerChoice)  {
            stats.ties++;
            window.alert(`It's a tie.`)
        }   else if (
            (userChoice === "ROCK" && computerChoice === "SCISSORS") ||
            (userChoice === "ROCK" && computerChoice === "LIZARD")  ||
            (userChoice === "PAPER" && computerChoice === "ROCK") ||
            (userChoice === "PAPER" && computerChoice === "SPOCK") ||
            (userChoice === "SCISSORS" && computerChoice === "PAPER") ||
            (userChoice === "SCISSORS" && computerChoice === "LIZARD") ||
            (userChoice === "LIZARD" && computerChoice === "PAPER")  ||
            (userChoice === "LIZARD" && computerChoice === "SPOCK") ||
            (userChoice === "SPOCK" && computerChoice === "ROCK")  ||
            (userChoice === "SPOCK" && computerChoice === "SCISSORS")
        )   {
            stats.wins++;
            window.alert(`Player wins!`)
        }   else if (
            (userChoice === "ROCK" && computerChoice === "PAPER") ||
            (userChoice === "ROCK" && computerChoice === "SPOCK") ||
            (userChoice === "PAPER" && computerChoice === "SCISSORS") ||
            (userChoice === "PAPER" && computerChoice === "LIZARD") ||
            (userChoice === "SCISSORS" && computerChoice === "ROCK")  ||
            (userChoice === "SCISSORS" && computerChoice === "SPOCK") ||
            (userChoice === "LIZARD" && computerChoice === "ROCK") ||
            (userChoice === "LIZARD" && computerChoice === "SCISSORS") ||
            (userChoice === "SPOCK" && computerChoice === "PAPER")  ||
            (userChoice === "SPOCK" && computerChoice === "LIZARD")
        )   {
            stats.losses++;
            window.alert(`Computer wins.`)
        }

        keepPlaying = window.confirm(`Play again?`)
    };

    window.alert(`Stats:
        Wins: ${stats.wins}
        Losses: ${stats.losses}
        Ties: ${stats.ties}

        Your choices:
        Rock: ${stats.count.rock}
        Paper: ${stats.count.paper}
        Scissors: ${stats.count.scissors}
        Lizard: ${stats.count.lizard}
        Spock: ${stats.count.spock}`);
};

playGame();