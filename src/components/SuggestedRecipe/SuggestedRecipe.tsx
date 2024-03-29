import { Component } from "react";
import StarIcon from '@material-ui/icons/Star';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Button from "../buttons/Button/Button";
import { Recipe } from "../../utils/types";

type SuggestedRecipeProps = {
    recipe: Recipe
    isEven: boolean
}

class SuggestedRecipe extends Component<SuggestedRecipeProps> {

    constructor(props: SuggestedRecipeProps) {
        super(props);
    }

    render() {
 
        return <div className={`rounded-3xl mt-20 p-10 top-70 h- w-72 ${this.props.isEven ? "bg-complementary" : "bg-white"}`}>
            <div className="block mb-3">
                <div className="-mt-28">
                    <img src={this.props.recipe.img} className="w-40 justify-self-center"/>
                </div>
            </div>
            <div className="block flex">
                <div className="flex-grow">
                    <StarIcon className="text-primary"/> <span className="text-sm">{this.props.recipe.rating}</span>
                    <h3>{this.props.recipe.name}</h3>
                    <h4 className="text-gray-500"><strong>{this.props.recipe.blocks}</strong> blocks</h4>
                </div>
                <div className="ml-5 rounded-full bg-primary h-14 w-14 flex flex-col items-center justify-center">
                    <span className="text-white text-sm">{this.props.recipe.prepTime}</span>
                    <span className="text-white text-xs">min</span>
                </div>
            </div>
            <div className="flex justify-self-right">
                <Button linkTo={`/recipe/${this.props.recipe.slug}`} filled={true} classStyles="flex-1 mt-10 px-5" label="View Recipe" icon={<ArrowRightAltIcon/>}/>
            </div>
        </div>
    }
}

export default SuggestedRecipe;