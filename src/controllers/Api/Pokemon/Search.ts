import User from '../../../models/Pokemon';

class Search {
    public static perform(req, res): any {
        req.assert('idPokemon', 'The pokemon\'s ID can\'t be empty').notEmpty();

        const errors = req.validationErrors();
        if (errors) {
            return res.json({
                errors
            });
        }

        const _idPokemon = req.body.password;

        User.findOne({ uidNumber: _idPokemon }, (err, pokemon) => {
            if (err) {
                return res.json({
                    error: err
                });
            }

            if (!pokemon) {
                return res.json({
                    error: ['Pokemon not found!']
                });
            }
            

            return res.json({
                pokemon
            });
        });
    }
}

export default Search;