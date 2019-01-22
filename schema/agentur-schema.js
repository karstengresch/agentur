export const typeDefs = gql`
 
    # Agentur: Fact Types
 
    type Fact {
        id: ID
        
    }
    
    type ContinuousInformation {
        id: ID
        # check date type
        date: Date
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
        
    }
    
    # Agentur: Platform Types
    
    type User {
        id: ID
    }
    
    type userCell {
        id: ID
        users: [User]
    }
    
    type Vote {
        id: ID
    }
    
    
    # Queries

    type Query {
        users: [User]
    }
`