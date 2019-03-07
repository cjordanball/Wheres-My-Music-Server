const graphql = require('graphql');
const data = require('../sampleData.js');

const {
	GraphQLObjectType,
	GraphQLString
} = graphql

const ScoreType = new GraphQLObjectType({
	name: 'Score',
	fields: () => ({
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		composer: { type: GraphQLString },
		description: { type: GraphQLString }
	})
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		score: {
			type: ScoreType,
			args: { id: { type: GraphQLString } },
			resolve(parentValue, args) {
				return data.find(val => {
					return val.id === args.id
				})
			}
		}
	}
});