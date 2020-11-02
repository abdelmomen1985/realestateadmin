import { useMutation } from "@apollo/client";
import { Button, CircularProgress, TextField } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { AddCircleOutline, SaveOutlined } from "@material-ui/icons";
import arrayMutators from "final-form-arrays";
import React from "react";
import { Field, Form } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";
import { INSERT_COMP_PHASES } from "../../queries/comp_phases";
import { CompPhaseType } from "../../types/comp_phase";
import { sleep } from "../../utils/common";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    overflow: "scroll",
  },
  paper: {
    minWidth: "600px",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: "scroll",
  },
}));

const onSubmit = async (values: any) => {
  await sleep(700);
};

type CompoundPhasesModalProps = {
  compound_id: string;
  isOpen: boolean;
  onHandleClose: () => void;
  comp_phases: CompPhaseType[];
};

export const CompoundPhasesModal = (props: CompoundPhasesModalProps) => {
  const classes = useStyles();
  let { isOpen, onHandleClose, compound_id, comp_phases } = props;
  //const [initPhases, setInitPhases] = useState<CompPhaseType[]>([]);
  // Get Current Compound Phases

  const [insertPhases, { data: mutData }] = useMutation(INSERT_COMP_PHASES);

  const updatePhases = async (values: any) => {
    let newValues = values.phases.map((one: CompPhaseType) => {
      return {
        compound_id,
        phase_name: one.phase_name,
      } as CompPhaseType;
    });
    console.log("%c Mo2Log values ", "background: #bada55", newValues);
    // Insert b4 notify parent
    await insertPhases({
      variables: {
        phases: newValues,
      },
    });
    onHandleClose();
  };

  /*
  const initPhases = useMemo(() => {
    
  }, [comp_phases]);
  */

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isOpen}
      onClose={onHandleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <div className={classes.paper}>
          <Form
            onSubmit={updatePhases}
            mutators={{
              ...arrayMutators,
            }}
            render={({
              handleSubmit,
              form: {
                mutators: { push, pop },
              }, // injected from final-form-arrays above
              pristine,
              submitting,
              values,
            }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <FieldArray name="phases" initialValue={comp_phases}>
                    {({ fields }) =>
                      fields.map((name, index) => (
                        <div key={name}>
                          <h3>
                            <label>Phase. #{index + 1}</label>
                          </h3>
                          <div>
                            <Field name={`${name}.phase_name.ar`}>
                              {(props) => (
                                <TextField
                                  name={props.input.name}
                                  value={props.input.value}
                                  onChange={props.input.onChange}
                                  variant="outlined"
                                  label="Arabic Name"
                                  size="small"
                                />
                              )}
                            </Field>

                            <Field name={`${name}.phase_name.en`}>
                              {(props) => (
                                <TextField
                                  name={props.input.name}
                                  value={props.input.value}
                                  onChange={props.input.onChange}
                                  variant="outlined"
                                  label="English Name"
                                  size="small"
                                />
                              )}
                            </Field>

                            <div
                              style={{ display: "inline-flex", padding: "1em" }}
                            >
                              <span
                                onClick={() => fields.remove(index)}
                                style={{ cursor: "pointer" }}
                              >
                                ❌
                              </span>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </FieldArray>
                  <div style={{ marginTop: ".5em" }}>
                    <Button
                      type="button"
                      variant="contained"
                      color="primary"
                      size="small"
                      startIcon={<AddCircleOutline />}
                      onClick={() => push("phases", undefined)}
                    >
                      Add Phase
                    </Button>
                  </div>
                  <div className="buttons" style={{ marginTop: "1em" }}>
                    <Button
                      type="submit"
                      color="primary"
                      variant="contained"
                      disabled={submitting || pristine}
                    >
                      {submitting ? (
                        <CircularProgress size={18} thickness={2} />
                      ) : (
                        <SaveOutlined />
                      )}
                      Submit
                    </Button>
                  </div>
                  {false && <pre>{JSON.stringify(values, null, 2)}</pre>}
                </form>
              );
            }}
          />
        </div>
      </Fade>
    </Modal>
  );
};
