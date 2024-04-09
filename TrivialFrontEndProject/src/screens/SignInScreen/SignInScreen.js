import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'

const SignInScreen = () => {
	return(
		<View style = {styles.viewContainer}>
			<View style = {styles.themeContainer}/>
			<View style = {styles.loginContainer}>
				<Image 
					source = {require("./../../assets/logo.png")}
					style = {styles.logo}
					/>
				<Text style = {styles.title}>Acesse sua conta</Text>
				<TextInput
					placeholder = "Email"
					style = {styles.input}
					/>
				<TextInput
					placeholder = "Senha"
					style = {styles.input}
					/>
				<TouchableOpacity style = {styles.buttonAccess}>
					<Text style = {styles.accessButtonText}>Acessar</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text style = {styles.registerButtonText}>Ainda não tem uma conta? Cadastre-se</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	viewContainer:{
		flex: 1,
		flexDirection: 'row',
		width: '100%',
		justifyContent: "space-between",
	},
	themeContainer:{
		flex: 2,
		backgroundColor: '#edbf2b',
		borderTopRightRadius: 25,
		borderBottomRightRadius: 25
	},
	loginContainer:{
		flex: 3,
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 200
	},
	logo: {
		marginBottom: 60
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 30,
	},
	buttonAccess: {
		height: 40,
		borderRadius: 5,
		width: '15%',
		marginBottom: 5,
		backgroundColor: '#edbf2b',
		justifyContent: 'center',
		alignItems: 'center',
	},
	registerButtonText: {
		color: '#000000',
		fontSize: 15,
	},
	accessButtonText: {
		color: '#FFFFFF',
		fontSize: 15,
		fontWeight: 'bold',
	},
	input: {
 		height: 40,
		marginBottom: 30,
		fontSize: 15,
		backgroundColor: '#d9d9d9',
		borderRadius: 5,
		width: '20%',
		color: '#a1a1a1',
		paddingLeft: 5,
	}
});

export default SignInScreen