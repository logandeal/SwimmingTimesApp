import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

class InfoButton extends Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.infoButton}
                onPress = {this.props.onPress}
                underlayColor={'#ecf0f1'}
            >
                <Text style={styles.infoButton}> {/* Make this a different style */}
                    {this.props.children}
                </Text>
            </TouchableHighlight>
        )
    }
}

class InfoButton2 extends Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.infoButton2}
                onPress = {this.props.onPress}
                underlayColor={'#ecf0f1'}
            >
                <Text style={styles.infoButton2}>
                    {this.props.children}
                </Text>
            </TouchableHighlight>
        )
    }
}

class InfoButton3 extends Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.infoButton4}
                onPress = {this.props.onPress}
                underlayColor={'red'}
            >
                <Text style={styles.infoButton3}>
                    {this.props.children}
                </Text>
            </TouchableHighlight>
        )
    }
}

class InfoButton4 extends Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.infoButton3}
                onPress = {this.props.onPress}
                underlayColor={'#ecf0f1'}
            >
                <Text style={styles.infoButton3}>
                    {this.props.children}
                </Text>
            </TouchableHighlight>
        )
    }
}


export default class App extends Component {

    state = {
        entry: 1,
        index: Math.floor(Math.random() * 14) + 1 ,
        entries: [],
        time: '',
        event: '',
        distance: '',
        distanceMeasurement: '',
        addEntryColor: '#74c5d8',
        hasMissing: false,
        startScreenEnabled: true,
        quotes: ["I Only Fear Not Trying.", "The greatest pleasure in life is doing what people say you cannot do.", "The price of excellence is discipline. The cost of mediocrity is disappointment", "The harder you work, the harder it is to surrender.","If it’s important to you, you will find a way. If not, you will find an excuse.", "There is no substitute for hard work.", "Procrastination makes easy things hard, hard things harder.", "If you’re going through hell, keep going.", "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", "The road to success is paved with failure.", "Embrace hard work.", "Enjoy the moments.", "You are far tougher than you realize.", "You will love who you become on the path to your goals."]
    }

    
    addEntry = () => {
            if (this.state.time == "" || this.state.event == "" || this.state.distance == "" || this.state.distanceMeasurement == "") {
                this.setState
                ({ 
                    hasMissing: true,
                })
            } else {
                this.setState
                ({
                    hasMissing: false,
                    entries: this.state.entries.concat(
                        "Entry: " + this.state.entry + "\n" +
                        "Time: " + this.state.time + "\n" +
                        "Event: " + this.state.distance + this.state.distanceMeasurement + " " + this.state.event
                    ),
                    
                    
                    entry: this.state.entry + 1,
                    time: "",
                    event: "",
                    distanceMeasurement: "",
                    distance: "",
                })
            }
            
    }
    
    proceed = () => {
        this.setState
        ({
            startScreenEnabled: false,
            proceedButton: '',
            proceedOff: true,
        })
    }
    
    removeEntry = (index) => {
        this.setState({
           entries: this.state.entries.slice(0,index).concat(this.state.entries.slice(index + 1))
        })
    }
    
    num0 = () => {
        this.setState({
            hasMissing: false,
            time: this.state.time + "0"
        })
    }
    
    num1 = () => {
        this.setState({
            hasMissing: false,
            time: this.state.time + "1"
        })
    }
    
    num2 = () => {
        this.setState({
            hasMissing: false,
            time: this.state.time + "2"
        })
    }
    
    num3 = () => {
        this.setState({
            hasMissing: false,
            time: this.state.time + "3"
        })
    }
    
    num4 = () => {
        this.setState({
            hasMissing: false,
            time: this.state.time + "4"
        })
    }
    
    num5 = () => {
        this.setState({
            hasMissing: false,
            time: this.state.time + "5"
        })
    }
    
    num6 = () => {
        this.setState({
            hasMissing: false,
            time: this.state.time + "6"
        })
    }
    
    num7 = () => {
        this.setState({
            hasMissing: false,
            time: this.state.time + "7"
        })
    }
    
    num8 = () => {
        this.setState({
            hasMissing: false,
            time: this.state.time + "8"
        })
    }
    
    num9 = () => {
        this.setState({
            hasMissing: false,
            time: this.state.time + "9"
        })
    }
    
    colon = () => {
        if (this.state.time.indexOf(":") < 0) {
            this.setState({
                hasMissing: false,
                time: this.state.time + ":"
            })
        }
    }
    
    decimal = () => {
        if (this.state.time.indexOf(".") < 0) {
            this.setState({
                hasMissing: false,
                time: this.state.time + "."
            })
        }
    }
    
    reset = () => {
        this.setState({
            hasMissing: false,
            time: ""
        })
    }
    
    setEvent = (distance, event) => {
        this.setState({
            hasMissing: false,
            distance,
            event
        })
    }
    
    setSCY = () => {
        this.setState({
            hasMissing: false,
            distanceMeasurement: "Y"
        })
    }
    
    setSCM = () => {
        this.setState({
            hasMissing: false,
            distanceMeasurement: "S"
        })
    }
    
    setLCM = () => {
        this.setState({
            hasMissing: false,
            distanceMeasurement: "L"
        })
    }
    
    

    render() {
        return (
            <View style={styles.container}>
            
                <View style={[this.state.startScreenEnabled && styles.startHeader, styles.header]}>
                    <Text style={styles.title}>
                        Swimming Times Log
                    </Text>
                    
                    <Text style={styles.subTitle}>
                        Alpha 0.1
                    </Text>
                    
                    {this.state.startScreenEnabled && (
                        
                        <View>
                            <InfoButton4 onPress={() => this.proceed()}>
                                >>>
                            </InfoButton4>
                            
                            <Text style={styles.inspirationalQuote}>
                                
                                "{this.state.quotes[this.state.index]}"
                            </Text>
                        </View>
                    )}
                </View> 
                
                {!this.state.startScreenEnabled && (
                    <View style={styles.body}>
                        <View style={styles.even}>
                        
                            <TouchableHighlight
                            onPress = {this.addEntry}
                            underlayColor={'#74c5d8'}
                            > 
                                <View style={styles.addEntryButton}>
                                    <Text style={styles.addEntryButtonText}>
                                        + Add Entry
                                    </Text>
                                </View>
                            
                            </TouchableHighlight>
                            
                        </View>
                        
                        <View style={styles.entryContainer}>
                        
                            {this.state.entries.map((entry, index) => (
                                <View style={styles.entry}>
                                    <Text style={styles.previousEntryText}>
                                        {entry}
                                    </Text>
                                    <InfoButton3 onPress={() => this.removeEntry(index)}>
                                        - Remove Entry
                                    </InfoButton3>
                                </View>
                                
                            ))}
                        
        
                            
                            <Text style={[styles.newEntryText, this.state.hasMissing && styles.missingEntryText]}>
                                Entry: {this.state.entry}
                                {"\n"}
                                Time: {this.state.time}
                                {"\n"}
                                Event: {this.state.distance}{this.state.distanceMeasurement} {this.state.event}
                            </Text>
                            
                        </View> 
                        
                        <View style={styles.eventContainer}>
                        
                            <Text style={styles.regText}>
                            
                                <View style={styles.even}>
                                    Butterfly
                                    <InfoButton2 onPress={() => this.setEvent(50, "Butterfly")}>50</InfoButton2>
                                    <InfoButton2 onPress={() => this.setEvent(100, "Butterfly")}>100</InfoButton2>
                                    <InfoButton2 onPress={() => this.setEvent(200, "Butterfly")}>200</InfoButton2>
                                </View> 
                                
                                <View style={styles.even}>
                                    Breaststroke
                                    <InfoButton2 onPress={() => this.setEvent(50, "Breaststroke")}>50</InfoButton2>
                                    <InfoButton2 onPress={() => this.setEvent(100, "Breaststroke")}>100</InfoButton2>
                                    <InfoButton2 onPress={() => this.setEvent(200, "Breaststroke")}>200</InfoButton2>
                                </View>
                                
                                <View style={styles.even}>
                                    Backstroke
                                    <InfoButton2 onPress={() => this.setEvent(50, "Backstroke")}>50</InfoButton2>
                                    <InfoButton2 onPress={() => this.setEvent(100, "Backstroke")}>100</InfoButton2>
                                    <InfoButton2 onPress={() => this.setEvent(200, "Backstroke")}>200</InfoButton2>
                                </View>
                                
                                <View style={styles.even}>
                                    Freestyle
                                    <InfoButton2 onPress={() => this.setEvent(50, "Freestyle")}>50</InfoButton2>
                                    <InfoButton2 onPress={() => this.setEvent(100, "Freestyle")}>100</InfoButton2>
                                    <InfoButton2 onPress={() => this.setEvent(200, "Freestyle")}>200</InfoButton2>
                                    <InfoButton2 onPress={() => this.setEvent(500, "Freestyle")}>500</InfoButton2>
                                    <InfoButton2 onPress={() => this.setEvent(1000, "Freestyle")}>1000</InfoButton2>
                                </View>
                                
                                <View style={styles.even}>
                                    <InfoButton2 onPress= {this.setSCY}> set SCY </InfoButton2>
                                    <InfoButton2 onPress= {this.setSCM}> set SCM </InfoButton2>
                                    <InfoButton2 onPress= {this.setLCM}> set LCM </InfoButton2>
                                </View>
                                
                            </Text>
                            
                        </View>
                        
                        <View style={styles.numContainer}>
                        
                            <View style={styles.even}>
                            
                                <InfoButton onPress = {this.num0}>0</InfoButton> 
                                
                                <InfoButton onPress = {this.num1}>1</InfoButton> 
                                
                                <InfoButton onPress = {this.num2}>2</InfoButton> 
                                
                                <InfoButton onPress = {this.num3}>3</InfoButton> 
                                
                                <InfoButton onPress = {this.num4}>4</InfoButton> 
                                
                                <InfoButton onPress = {this.colon}>:</InfoButton> 
                                    
                            </View>
                            
                            <View style={styles.even}>
                                    
                                <InfoButton onPress = {this.num5}>5</InfoButton> 
                                
                                <InfoButton onPress = {this.num6}>6</InfoButton> 
                                
                                <InfoButton onPress = {this.num7}>7</InfoButton> 
                                
                                <InfoButton onPress = {this.num8}>8</InfoButton> 
                                
                                <InfoButton onPress = {this.num9}>9</InfoButton> 
                                
                                <InfoButton onPress = {this.decimal}>.</InfoButton> 
                               
                            </View>
                            
                            <View style={styles.even}> 
                               
                               <InfoButton onPress = {this.reset}>Reset</InfoButton> 
                               
                            </View>
                            
                        </View>
                        
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b3bac6',
    },
    
    startHeader: {
        flex: 1,  
    },
    
    header: {
        backgroundColor: 'lightblue',
        borderBottomWidth: 3, 
        borderColor: '#74c5d8', 
    },
    
    title: {
        paddingTop: 1,
        paddingBottom: 1,
        fontSize: 12,
        fontWeight: 1000,
        textAlign: 'center',
    },
    
    subTitle: {
        fontSize: 12,
        fontWeight: 500,
        textAlign: 'center',
        color: '#74c5d8', 
    },
    
    body: {
        flex: 1,
    },
    
    even: {
        flexDirection: 'row',
    },
    
    addEntryButton: {
        backgroundColor: 'lightblue',
        padding: 2,
        margin: 2,
        borderRadius: 5,
        width: 95,
        borderWidth: 3,
        borderColor: '#74c5d8'
    },
    
    addEntryButtonText: {
        fontWeight: 350,
        fontSize: 11,
        textAlign: 'center'
    },
    
    entryContainer: { 
        height: 160,
        backgroundColor: '#74c5d8',
        padding: 3,
        overflow: 'scroll',
        borderWidth: 4,
        borderColor: 'lightblue',
        borderRadius: 10,
        flex: 1,
    },
    
    eventContainer: {
        backgroundColor: '#74c5d8',
        padding: 2,
        borderWidth: 4,
        borderColor: 'lightblue',
        borderRadius: 10,
        flex: .7
    },
    
    infoButton: { //numpad
        padding: 1,
        fontSize: 10,
        backgroundColor: 'lightblue',
        borderWidth: 1,
        borderColor: '#74c5d8',
        borderRadius: 2,
        width: 36,
        height: 20,
        textAlign: 'center',
    },
    
    infoButton2: { //distancenumpad
        padding: 1.5,
        fontSize: 10,
        backgroundColor: 'lightblue',
        borderWidth: 1,
        borderColor: '#74c5d8',
        borderRadius: 5,
    },
    
    infoButton3: { //removeentry
        margin: 2,
        fontSize: 11,
        backgroundColor: 'lightblue',
        borderWidth: 0,
        borderColor: '#74c5d8',
        borderRadius: 1,
        textAlign: 'center',
        color: '#4cb5cd', 
    },
    
    infoButton3: { //proceedbutton
        fontSize: 12,
        backgroundColor: 'lightblue',
        textAlign: 'center',
        color: 'black', 
        fontWeight: 100,
    },
    
    previousEntryText: {
        padding: 1,
        fontSize: 11
    },
    
    regText: {
        fontSize: 11,
    },
    
    newEntryText: {
        borderTop: '2px white solid',
        borderLeft: '2px white solid',
        backgroundColor: 'lightblue',
        fontSize: 11,
        borderRadius: 5,
        padding: 1
    },
    
    missingEntryText: {
        color: 'red',
    },
    
    numContainer: {
        alignItems: 'center',
    },
    
    entry: {
        border: '1.5px white solid',
        marginBottom: 4
    },
    
    inspirationalQuote: {
        fontSize: 18,
        textAlign: 'center',
        margin: 40,
        fontFamily: 'Chewy',
    },
    
});
