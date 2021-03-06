import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardItem, Input, Button } from './common'

class EmployeeCreate extends Component {

    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <Input 
                        label="Name"
                        placeHolder="Jane"
                        value={this.props.name.value}
                        onChangeText={value => this.props.employeeUpdate({prop: 'name', value})}
                    />
                </CardItem>

                <CardItem>
                    <Input 
                        label="Phone"
                        placeHolder="555-555-555"
                        value={this.props.phone.value}
                        onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})}

                    />
                </CardItem>

                <CardItem style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Shift:</Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value})}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thurday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                    </CardItem>

                <CardItem>
                    <Button  onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardItem>
            </Card>
        )
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);