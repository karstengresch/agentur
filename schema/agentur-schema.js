export const typeDefs = gql`
 
    # Agentur: Fact Types
 
    type Fact {
        id: ID!
        whatDescription: String!
        whatDescriptionSummary: String!
        whenDate: Date
        whenTime: Time
        who: [Person]
    }
    
    type Proof {
       id: ID! 
        
    }
    
    type ContinuousInformation {
        id: ID!
        # 
        date: DateTime
        fact: Fact!
    }
    
    
    
    type MediaData {
        id: ID!
    }
    
    type Person {
        id: ID!
    }
    
    type GeoData {
        id: ID!
    }
    
    type Address {
        id: ID!
    }
    
    type Citation {
        id: ID!
    }
    
    # Agentur: Platform Types
    
    type User {
        id: ID!
    }
    
    type UserCell {
        id: ID!
        # TODO Limits
        ownName: String
        shortName: String
        avatarImage: String
        users: [User]
    }
    
    # TODO Recursive data structures w/ GraphQL?
    type UserCells {
        id: ID!
        userCells: [UserCells]
    }
    
    type Vote {
        id: ID!
    }
    
    
    # Queries

    type Query {
        users: [User]
    }
`