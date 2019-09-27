import React from 'react';
import Paper from '@material-ui/core/Paper';
import config from 'config';
import { ServiceTable as ServiceTable } from '../../components/ServiceTable';

class CheckStatusPage extends React.Component {

    constructor(props) {
        super(props);
        this.urls = `${config.urls}`.split('|');
        this.rows = {};
        this.urls.forEach(url => {
            this.rows[url] = null;
        });
        this.state = {
            rows: this.rows
        };
    }

    async componentDidMount() {
        this.initNextCheck(500);
    }

    async initNextCheck(delay) {
        this.timer = setTimeout(() => {
            this.startCheck();
        }, delay);
    }

    startCheck = async () => {
        const start = async () => {
            await this.asyncForEach(this.urls, async (url) => {
                let res = await this.getStatus(url);
                console.log(res);
                this.updateList(url, res);
            });
            this.initNextCheck(5000);
        };
        start();
    }

    async asyncForEach(array, callback) {
        for (let index = 0; index < array.length; index++) {
            await callback(array[index], index, array);
        }
    }

    async getStatus(url) {
        try {
            const requestOptions = {
                method: 'GET'
            };

            const response = await fetch(url, requestOptions);
            if (!response.ok) {
                throw Error(response.statusText);
              }
            const json = await response.json();
            return json;
        } catch (error) {
            return null;
        }
    }

    updateList(url, res) {
        let rows = this.state.rows;
        rows[url] = res.servState;
        this.setState({
            rows: this.rows
        });
    }

    render() {

        return (
            <Paper style={{ margin: 50 }}>
                {
                    Object.keys(this.state.rows).map(key => {
                        return <ServiceTable serviceKey={key} serviceData={this.state.rows[key]} key={key}></ServiceTable>;
                    })
                }

            </Paper>
        );
    }
}

export { CheckStatusPage as CheckStatusPage };