import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
import Team from './team';

class Matches extends Model {
  declare id: number;
  declare homeTeam: number;
  declare awayTeam: number;
  declare homeTeamGoals: number;
  declare awayTeamGoals: number;
  declare inProgress: number;
}

Matches.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'match',
  timestamps: false,
  underscored: true,
});

Team.hasMany(Matches, { foreignKey: 'homeTeam' as 'teamHome' });
Team.hasMany(Matches, { foreignKey: 'awayTeam' as 'teamAway' });

Matches.belongsTo(Team, { foreignKey: 'homeTeam' as 'teamHome' });
Matches.belongsTo(Team, { foreignKey: 'awayTeam' as 'teamAway' });

export default Matches;
