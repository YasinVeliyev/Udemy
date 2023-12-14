import { AppBar, Toolbar, Grid, Container } from "@mui/material";
import Angular from "./images/angular.jpg";
import Bootsrap from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";

import { Course } from "./Course";

console.log(Csharp);

function App() {
	return (
		<>
			<AppBar>
				<Toolbar sx={{ fontSize: 30 }}>Kart Projesi</Toolbar>
			</AppBar>
			<Container maxWidth="lg">
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} lg={3}>
						<Course
							image={Angular}
							title="Angular"
							description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ducimus, quaerat ipsa sit similique dicta deserunt, necessitatibus repellat natus est aspernatur dolore, eos voluptatibus placeat fuga ipsam vero aperiam sequi."
						/>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<Course
							image={Csharp}
							title="CSharp"
							description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ducimus, quaerat ipsa sit similique dicta deserunt, necessitatibus repellat natus est aspernatur dolore, eos voluptatibus placeat fuga ipsam vero aperiam sequi."
						/>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<Course
							image={Bootsrap}
							title="Bootsrap"
							description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ducimus, quaerat ipsa sit similique dicta deserunt, necessitatibus repellat natus est aspernatur dolore, eos voluptatibus placeat fuga ipsam vero aperiam sequi."
						/>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<Course
							image={KompleWeb}
							title="KompleWeb"
							description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ducimus, quaerat ipsa sit similique dicta deserunt, necessitatibus repellat natus est aspernatur dolore, eos voluptatibus placeat fuga ipsam vero aperiam sequi."
						/>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

export default App;
