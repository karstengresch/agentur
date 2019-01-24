export const typeDefs = gql`
 
    # Agentur: Fact Types
 
    type Fact {
        id: ID
        
    }
    
    type ContinuousInformation {
        id: ID
        # 
        date: DateTime
    }
    
    type MediaData {
        id: ID
    }
    
    type Person {
        id: ID
    }
    
    type GeoData {
        id: ID
    }
    
    type Address {
        id: ID
    }
    
    type Citation {
        id: ID
    }
    
    # Agentur: Platform Types
    
    type User {
        id: ID
    }
    
    type UserCell {
        id: ID
        # TODO Limits
        users: [User]
    }
    
    # TODO Recursive data structures w/ GraphQL?
    type UserCells {
        id: ID
        userCells: [UserCells]
    }
    
    type Vote {
        id: ID
    }
    
    
    # Queries

    type Query {
        users: [User]
    }
`