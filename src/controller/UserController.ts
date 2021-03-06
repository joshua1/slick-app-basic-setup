import { Controller, View, Param,Query } from "@slick-for/svelte";
import UserPage from "./user/user-page.svelte";
import { GithubApi } from "../services/github-api";


@Controller("/user")
export class UserController {


  @View("/:username", UserPage)
  async GetUserPage(@Param("username") username: string, api: GithubApi, @Query("fmt") format) {
    const data = await api.getUserByName(username);
    return {
      data,
      json:format==="json"
    };
  }
}
