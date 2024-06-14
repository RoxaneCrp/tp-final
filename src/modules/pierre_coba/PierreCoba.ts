export function getTotalDices(teams: string[][]): number[][] {
    const colorToNumber: Record<string, number> = {
        'green': 1,
        'gray': 2,
        'orange': 1,
        'yellow': -1,
        'blue': 0,
        'pink': 3,
    };

    const teamDices: number[][] = teams.map(team =>
        team.map(color => colorToNumber[color])
    );

    /* Ajouter logique pour les dès à pouvoir */

    return teamDices;
}

export function getTotalTeamDices(teams: string[]): number {
    const colorToNumber: Record<string, number> = {
        'green': 1,
        'gray': 2,
        'orange': 1,
        'yellow': -1,
        'blue': 0,
        'pink': 3,
    };

    const teamDices: number[] = teams.map(color => colorToNumber[color]);

    const total = teamDices.reduce((accumulator, current) => accumulator + current, 0);

    return total;
}

/* Créer fonction pour trouver la solution */