import { getTotalDices, getTotalTeamDices } from '../PierreCoba';
import { expect, describe, it } from 'vitest';

describe('getTotalDices', () => {
    describe('one dice', () => {
        it('should green return 1', () => {
            expect(getTotalTeamDices(['green'])).toBe(1);
        });
        it('should gray return 2', () => {
            expect(getTotalTeamDices(['gray'])).toBe(2);
        });
        it('should orange return 1 when total odd', () => {
            expect(getTotalTeamDices(['orange'])).toBe(1);
        });
        it('should yellow return -1', () => {
            expect(getTotalTeamDices(['yellow'])).toBe(-1);
        });    
        it('should blue return 0 when no other group', () => {
            expect(getTotalTeamDices(['blue'])).toBe(0);
        });        
        it('should pink return 3', () => {
            expect(getTotalTeamDices(['pink'])).toBe(3);
        });
    });

    describe('power dices', () => {
        describe('orange power', () => {
          it('should return 1 if group size is odd', () => {
            expect(getTotalTeamDices(['orange', 'green', 'green'])).toBe(1 + 1 + 1);
          });
          it('should return 2 if group size is even', () => {
            expect(getTotalTeamDices(['orange', 'green'])).toBe(2 + 1);
          });
        });
      
        describe('blue power', () => {
          it('should return number of dice in other group (1 dice)', () => {
            expect(getTotalDices([['blue'], ['green']])).toBe([[1], [1]]);
          });
          it('should return number of dice in other group (2 dice)', () => {
            expect(getTotalDices([['blue'], ['green', 'gray']])).toBe([[2], [1, 2]]);
          });
          it('should handle multiple blue dice correctly', () => {
            expect(getTotalDices([['blue', 'blue'], ['green', 'gray']])).toBe([[2, 2], [1, 2]]);
          });
        });
      
        describe('pink power', () => {
          it('should return 3 and set lowest value dice in group to 0', () => {
            expect(getTotalTeamDices(['pink', 'green'])).toBe(3 + (1 - 1));
          });
          it('should set all lowest value dices in group to 0', () => {
            expect(getTotalTeamDices(['pink', 'green', 'green'])).toBe(3 + (1 - 1) + (1 - 1));
          });
          it('should set all lowest value dices in group to 0', () => {
            expect(getTotalTeamDices(['pink', 'green', 'gray'])).toBe(3 + (1 - 1) + 2);
          });
          it('should handle multiple pink dice correctly', () => {
            expect(getTotalTeamDices(['pink', 'pink', 'green', 'gray'])).toBe(3 + 3 + (1 - 1) + 2);
          });
        });
    });
});

/* Rajouter des tests pour la solution */