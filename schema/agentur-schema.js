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
    
    
    # Queries

    type Query {
        users: [User]
    }
`