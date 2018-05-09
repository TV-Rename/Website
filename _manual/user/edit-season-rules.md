<!-- START EDIT SEASON RULES ----------------- -->
## Edit Season Rules

The "Edit Season Rules" pane allows you to manipulate the local data from [The&nbsp;TVDB](http://thetvdb.com "Visit thetvdb.com") to suit your episode structure.

![Edit Season Rules]({{ site.baseurl }}/assets/images/main-window/edit-season-rules-01.png){:.pic-l}

Episodes 1 and 2 of Season 5 of "Marvel's Agents of S.H.I.E.L.D." aired as a double episode so only one file exists, however [The&nbsp;TVDB](http://thetvdb.com "Visit thetvdb.com") correctly has both episodes listed individually, so there is a conflict.

The image illustrates a rule that merges the two episodes into one. This will affect the name displayed in the _**My Shows**_ tab, and the naming of the file in the media library.

The rules are applied in top to bottom order, you can use the the `Up` and `Down` buttons to move a rule.

`Add`, `Edit`, and `Delete` will manipulate the list as expected.

![Add/Modify Rule]({{ site.baseurl }}/assets/images/main-window/add-modify-rule-01.png){:.pic-r}
Clicking either `Add` or `Edit` will open the _Add/Modify Rule_ pane. The only difference being `Add` allows you to create a new rule and `Edit` pulls in the data from a highlighted rule for you to change.

In this example we are editing the rule shown above. This is a two part process, firstly select an "Action:", and secondly tell TV&nbsp;Rename what to apply the action to.

In this case the "Action" is "Merge", we are merging "1" and "2" i.e. Episodes 1 and 2 of the selected season, And we will let TV&nbsp;Rename name the new file automatically.

The "Actions:" available are: -

| **Ignore** | Keep the specified episode in the guide, but don't check for it (or rename it) on disk locally. |
| **Rename** | Manually set the name of an episode. | 
| **Remove** | Make a an episode disappear. All episodes above will be renumbered down to fill the gap. |
| **Swap** | Swap the position of two episodes. |
| **Merge** | The episodes numbers supplied all in a single multi-episode file. |
| **Insert** | Manually add an episode into the season. Later episodes are renumbered to accommodate the change. |
| **Split** | Turn one episode into many. Following episodes are renumbered to accommodate the change. |

After applying a rule, go to _**My Shows**_ , select the show, and click `Refresh`. You will then see (and can check) the effects of the rules you've created.

{:.toplink}
[Return to Top]()
<!-- END EDIT SEASON RULES ------------------- -->
