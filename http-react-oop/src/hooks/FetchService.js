import React from 'react';

export default class FetchService extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
           data: null, 
           config: null, 
           method: null, 
           callFetch: false, 
           loading: false,
           error: null      
        }; 
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevState) {
        if (prevState.callFetch !== this.state.callFetch) {
            this.fetchData();
        }
    }

    fetchData = async() => {
        const { url } = this.props;
        this.setState({ loading: true });
        try {            
            const response = await fetch(url);            
            const json = await response.json();            
            this.setState({ data: json });
        } catch (error) {
            this.setState({ error: `Error to load data ${error.message}` });
        }
        this.setState({ loading: false });
    }

    render() {
        const { children } = this.props; 
        const { data, error, loading } = this.state;

        return children({ data, error, loading });
    }

}